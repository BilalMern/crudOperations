let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textDate = document.getElementById("textDate");
let textarea = document.getElementById("textarea");
let dateMsg = document.getElementById("dateMsg");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = `Input cannot be blank`;
  } else if (textDate.value === "") {
    dateMsg.innerHTML = `Plz select the date`;
  } else {
    msg.innerHTML = "";
    dateMsg.innerHTML = "";
    acceptData();
    //! vanishing form after success and pressing add button //
    add.setAttribute("data-bs-dismiss", "modal");
    //! Simulating button click because form is not went on first click it will went on 2nd click so we have to simulate the click//
    add.click();
    //! on clicking add button without giving date form gone without giving error so to resolve this issue we have to use IIFE function //
    (
      () => {
        add.setAttribute("data-bs-dismiss", "");
      }
    )();
  }
};

//! Accepting and storing data //
let data = [];

let acceptData = () => {
  //! We use this function to fetch all the form data and store it in above blank object //
  data.push({
    text: textInput.value,
    date: textDate.value,
    description: textarea.value,
  });
  localStorage.setItem("data",JSON.stringify(data))

  createTasks();
};

//! Uploading the stored data on screen //
let createTasks = () => {
//! solving repeating dublicate carts //
  tasks.innerHTML=""
    //!-----//
  data.map((x,y)=>{
    return tasks.innerHTML += `<div id=${y}>
  <span class="fw-bold">${x.text}</span>
  <span class="small text-secondary">${x.date}</span>
  <p>${x.description}</p>
  <span class="options">
    <i data-bs-toggle="modal" data-bs-target="#form" onclick ="editTask(this)" class="bi bi-pencil-square"></i>
    <i onclick ="deleteTask(this)"  class="bi bi-trash-fill"></i>
  </span>
  </div>`})
  ;
  resetForm();
};

//! Resetting form //
let resetForm = () => {
  textInput.value = "";
  textDate.value = "";
  textarea.value = "";
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  //! Removing task form data //
  data.splice(e.parentElement.parentElement.id,1);
  createTasks()
  localStorage.setItem("data",JSON.stringify(data))

};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  textDate.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;
  deleteTask(e)
};
(()=>{
  data= JSON.parse(localStorage.getItem("data")) || []
  createTasks()
 
})()
