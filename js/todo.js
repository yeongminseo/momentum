const todoForm = document.getElementById("todo-form")
const todoListUl = document.getElementById("todo-list")
const todoFormInput = todoForm.querySelector("input")
let todoSaved = []

function saveToStTd (){
    localStorage.setItem("todo",JSON.stringify(todoSaved))
}

function handleToDoSubmit (ev){
    ev.preventDefault();
    const newToDo = todoFormInput.value;
    const newToDoObj = [
        {
            text: newToDo,
            id : Date.now()
        }
    ]
    todoFormInput.value="";
    paintToDo(newToDo)
    todoSaved.push(newToDoObj)
    saveToStTd()
    
}
function deleteHandler(e){
     const li = e.target.parentElement
     li.remove();
}
function paintToDo (newToDo){
    const todoLi = document.createElement("li")
    const todoLiSpan = document.createElement("span")
    todoLiSpan.innerText=`${newToDo}`
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click",deleteHandler)
    deleteBtn.innerText = "❌"
    todoListUl.appendChild(todoLi)
    todoLi.appendChild(todoLiSpan)
    todoLi.appendChild(deleteBtn)
}

todoForm.addEventListener("submit",handleToDoSubmit)

const todoGet = localStorage.getItem("todo")

if(todoGet !== null){
    const parseToDo = JSON.parse(localStorage.getItem("todo"))
    parseToDo.forEach(paintToDo)
    todoSaved = parseToDo;
}
