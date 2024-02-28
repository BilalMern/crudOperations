let form = document.getElementById("form");
let input = document.getElementById("input")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("button clicked")
    formValidation()

})
let formValidation =()=>{
    if(input.value === ""){
        console.log("failure")
    }
    else{
        console.log("success")
    }
}