const container = document.querySelector(".container");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const listcontainer = document.querySelector(".list-container");
const newbtn = document.querySelector(".new-btn");
const newbtn1 = document.querySelector(".new-btn1");
const newbtn2 = document.querySelector(".up-btn");

const editbtn = document.querySelector(".editbtn");
const arrow = document.querySelector(".arrow-icon");
const icon = document.querySelector(".icon");
const icons = document.querySelector(".close-icon");
const list = document.querySelector(".list");
let inputtittle = document.querySelector(".input-tittle");
let text = document.querySelector(".text");

let Todo = JSON.parse(localStorage.getItem("Todo")) || [];

function readAll() {
  localStorage.setItem("object", JSON.stringify(Todo));
  localStorage.setItem("Todo", JSON.stringify(Todo));
  let listContainer = document.querySelector(".list-container");

  let object = localStorage.getItem("object");
  let objectData = JSON.parse(object);
  let elements = "";

  objectData.map(
    (record) =>
      (elements += `
      <input type='checkbox' class='input' id='${record.id}' onclick={check(${record.id})}>
      
      
      <li class='li' for=${record.id} onclick = {edit(${record.id})} >
      <label >${record.tittle}</label>
       <p>${record.description}</p>
      
     </li>
     <div class='icons'>
     <ion-icon name="trash-outline" class='icon' onclick='{delet(${record.id})}'></ion-icon>
     </div>
     
     `)
  );
  listContainer.innerHTML = elements;
}

newbtn.addEventListener("click", function () {
  container.classList.add("hidden");
  container1.classList.remove("hidden");
  arrow.classList.remove("hidden");
  newbtn1.textContent = "Add";
});

icon.addEventListener("click", function () {
  container.classList.remove("hidden");
  container1.classList.add("hidden");
  container2.classList.add("hidden");
  arrow.classList.add("hidden");
});

icons.addEventListener("click", function () {
  container.classList.remove("hidden");
  container1.classList.add("hidden");
  container2.classList.add("hidden");
  arrow.classList.add("hidden");
});

function create() {
  let tittle = document.querySelector(".input-tittle").value;
  let description = document.querySelector(".text").value;

  let newobj = { id: Date.now(), tittle: tittle, description: description };
  Todo.push(newobj);

  container.classList.remove("hidden");
  container1.classList.add("hidden");
  container2.classList.add("hidden");
  arrow.classList.add("hidden");

  inputtittle.value = "";
  text.value = "";

  readAll();
}

function delet(id) {
  Todo = Todo.filter((rec) => rec.id !== id);
  readAll();
}
function check() {
  let input = document.querySelector(".input");
  let li = document.querySelector(".li");

  li.classList.toggle("checked");
}

function edit(id) {
  container.classList.add("hidden");
  container1.classList.add("hidden");
  container2.classList.remove("hidden");

  let obj = Todo.find((rec) => rec.id === id);
  document.querySelector(".uinput-tittle").value = obj.tittle;
  document.querySelector(".utext").value = obj.description;
  document.querySelector(".id").value = obj.id;
}
function update() {
  let id = parseInt(document.querySelector(".id").value);
  let tittle = document.querySelector(".uinput-tittle").value;
  let description = document.querySelector(".utext").value;

  let index = Todo.findIndex((rec) => rec.id === id);
  Todo[index] = { id, tittle, description };
  console.log(index);
  readAll();
  container2.classList.add("hidden");
  container.classList.remove("hidden");
  container1.classList.add("hidden");
}
