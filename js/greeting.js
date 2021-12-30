const HIDDEN_CLASSNAME="hidden"
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const h1El = document.querySelector("#greeting")
const USERNAME_KEY = "username"
let savedData = []
let savedUserName = localStorage.getItem(USERNAME_KEY)

function logOutLog(){
    const logOutBtn = document.createElement("a")
    document.querySelector(".logout_btn").appendChild(logOutBtn)
    logOutBtn.innerText="로그아웃"
    savedData.push(savedUserName)
    logOutBtn.addEventListener("click",logOut)
}
function logOut(){
    window.location.reload() //삭제후 새로고침시킴
    localStorage.removeItem(USERNAME_KEY); //삭제
}

function onSubmit(ev){
    const userName= loginInput.value;
    ev.preventDefault();
    console.log(userName);
    loginForm.classList.add("hidden");
    /*h1El.innerText=`Hello ${userName}`;
    h1El.classList.remove(HIDDEN_CLASSNAME);*/
    paintingGreeting(userName)
    localStorage.setItem(USERNAME_KEY,userName);
    const us =localStorage.setItem(USERNAME_KEY,userName);
    logOutLog()
    
}

loginForm.addEventListener("submit",onSubmit);
function paintingGreeting(userName){
    loginForm.classList.add(HIDDEN_CLASSNAME)
    h1El.classList.remove(HIDDEN_CLASSNAME);
    h1El.innerText=`만나서 반갑습니다 ${userName}님`
}


if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
}else{
    logOutLog()
    paintingGreeting(savedUserName)
}

