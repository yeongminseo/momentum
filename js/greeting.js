const HIDDEN_CLASSNAME="hidden"
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const h1El = document.querySelector("#greeting")
const USERNAME_KEY = "username"
const savedUserName = localStorage.getItem(USERNAME_KEY)
localStorage.getItem(USERNAME_KEY)

function onSubmit(ev){
    const userName= loginInput.value;
    ev.preventDefault();
    console.log(userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    /*h1El.innerText=`Hello ${userName}`;
    h1El.classList.remove(HIDDEN_CLASSNAME);*/
    paintingGreeting(userName)
    localStorage.setItem(USERNAME_KEY,userName);
}
loginForm.addEventListener("submit",onSubmit);

function paintingGreeting(userName){
    h1El.classList.remove(HIDDEN_CLASSNAME);
    h1El.innerText=`Hello ${userName}`
}

if(savedUserName === null){
    loginForm.classList.remove("hidden");
    
}else{
    paintingGreeting(savedUserName)
}