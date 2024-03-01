let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textDate = document.getElementById("textDate");
let textarea = document.getElementById("textarea");
let dateMsg = document.getElementById("dateMsg");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add")
form.addEventListener("submit", (e)=>{
e.preventDefault()
formValidation()
})

let formValidation =()=>{
    if(textInput.value === ""){
        msg.innerHTML = `Input cannot be blank`
    }else if(textDate.value ===""){
        dateMsg.innerHTML =`Plz select the date`
    }
    else{
        msg.innerHTML=""
        dateMsg.innerHTML=""
        acceptData()
        //! vanishing form after success and pressing add button //
        add.setAttribute("data-bs-dismiss","modal")
        //! Simulating button click //
        add.click()
        //! on clicking add button without giving date form gone withour giving error so to resolve this issue we have to use IIFE function //
        
    }
}

//! Accepting and storing data //
let data ={}

let acceptData=()=>{ //! We use this function to fetch all the form data and store it in above blank object //
data["text"]=textInput.value;
data["date"]=textDate.value;
data["description"]=textarea.value;
createTasks()
}

//! Uploading the stored data on screen //
let createTasks =()=>{
tasks.innerHTML += `<div>
<span class="fw-bold">${data.text}</span>
<span class="small text-secondary">${data.date}</span>
<p>${data.description}</p>
<span class="options">
  <i class="bi bi-pencil-square"></i>
  <i class="bi bi-trash-fill"></i>
</span>
</div>`
resetForm()
}


//! Resetting form //
let resetForm =()=>{
    textInput.value ="";
    textDate.value="";
    textarea.value="";
}