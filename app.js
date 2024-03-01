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
        acceptData()
    }
}

//! Accepting and storing data //
let data ={}

let acceptData=()=>{ //! We use this function to fetch all the form data and store it in above blank object //
data["text"]=textInput.value;
data["date"]=textDate.value;
data["description"]=textarea.value;
console.log(data)
}
