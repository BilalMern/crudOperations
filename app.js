let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textDate = document.getElementById("textDate");
let textarea = document.getElementById("textarea");
let dateMsg = document.getElementById("dateMsg")
let msg = document.getElementById("msg")
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
    }
}