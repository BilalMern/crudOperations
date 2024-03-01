let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textDate = document.getElementById("textDate");
let textarea = document.getElementById("textarea")
form.addEventListener("submit", (e)=>{
e.preventDefault()
formValidation()
})

let formValidation =()=>{
    if(textInput.value === ""){
        console.log("failure")
    }else if(textDate.value ===""){
        console.log("failure")
    }
    else{
        console.log("success")
    }
}