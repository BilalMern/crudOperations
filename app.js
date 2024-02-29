let form = document.getElementById("form");
let input = document.getElementById("input");
let msg =document.getElementById("msg");
let posts=document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    formValidation()

})

let formValidation =()=>{
    if(input.value === ""){
        msg.innerHTML =`Post cannot be blank`
    }
    else{
        msg.innerHTML =""
        console.log("success")
        acceptData()
    }
}

let data ={};
let acceptData =()=>{
    data["text"]=input.value;
    createPosts()
}

let createPosts=()=>{
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onclick ="editPost(this)" class="bi bi-pencil-square"></i>
      <i onclick="deletePost(this)" class="bi bi-trash3"></i>
    </span>
  </div>`
    input.value ="";
}

let deletePost =(e)=>{
e.parentElement.parentElement.remove()
}

let editPost =(e)=>{
    input.value =e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove()

}