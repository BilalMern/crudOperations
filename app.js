let form = document.getElementById("form");
let input = document.getElementById("input");
let msg =document.getElementById("msg");
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
    }
}