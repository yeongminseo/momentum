const todoForm = document.getElementById("todo-form")
const todoListUl = document.getElementById("todo-list")
const todoFormInput = todoForm.querySelector("input")
let todoSaved = []
console.log(todoSaved)
function saveToStTd (){
    localStorage.setItem("todo",JSON.stringify(todoSaved)) //로컬스토리지에 todo라는 키값으로 todoSaved안에 있는 배열을 "문자화" 해서 집어넣는다.
    //집어넣을땐 문자화 (JSON.stringfy) , 꺼내서 활용할땐 변수화(JSON.parse)
}

function handleToDoSubmit (ev){ 
    ev.preventDefault(); //기본 액션을 막는다.
    const newToDo = todoFormInput.value; //newToDo에 인풋입력값을 넣는다
    todoFormInput.value="";
    const newToDoObj = //오브젝트생성 
        {
            text: newToDo, //인풋값받은 newToDo
            id : Date.now() //난수생성 [삭제할때 구분을 위한 아이디로활용할것]
        }
     //입력후 인풋박스안을 비워준다.
    paintToDo(newToDoObj); //오브젝트를 활용하여 li를 생성하는 함수를 실행한다.
    todoSaved.push(newToDoObj)//위에서 선언된 todoSaved배열에 newToDoObj를 집어넣는다.
    saveToStTd()//스토리지에 값을 저장하는 함수를 실행한다.
}
function deleteHandler(e){
     const li = e.target.parentElement
     li.remove();
    console.log(typeof(li.id),todoSaved[0].id)

    //todoSaved는 배열이기때문에 forEach처럼 아이디를받아 전체를 돌리지않고
    //todoSaved.id를 로그해도 뜨지않았다 todoSaved[0].id 과같이 번호를 매기고
    //id를 받으려고하니 받을수있었다. 
    //todoSaved.filter((todo)=>todo.id) 는 forEach의 (item) 과 같이
    //배열안의 모든 아이템들을 반복적으로 확인해 필터링할수있었고 아래의 todo.id는
    //todoSaved[0],[1],[2].. 모든 아이템들의 id와 li의 아이디가 같은지 비교하고
    //같지않을경우에만 true를 반환하여 남겨두고 같은경우는 지우게된다.
    todoSaved = todoSaved.filter((todo)=>todo.id !== JSON.parse(li.id))
    //내가누른 델리트버튼의 li의 아이디와 일치하는 todoSaved속 데이터를 삭제 -> 로컬스트리지에 업데이트
    //내가누른 델리터브턴의 li = e.target.parentElement 의 ID 값과 일치하는 li는 내가누른 버튼의 부모 li
    //todoSaved에서 삭제후 로컬스트리지에 문자화해서 저장하는 함수 saveToStTd를 실행.
    saveToStTd()
     //누른 델리트버튼의 부모 (li)의 아이디와 todoSaved속 데이터들의 id가 같다면 그 데이터는 삭제->로컬스트리지 연동함수(savedToStTd) 실행
}
function paintToDo (toDoObj){ //newToDoObj와 parseToDo값을 받고있다.
    const todoLi = document.createElement("li")
    todoLi.id=toDoObj.id
    const todoLiSpan = document.createElement("span")
    todoLiSpan.innerText=`${toDoObj.text}` //newToDoObj의 텍스트 / parseToDo의 텍스트 들이 span안에 생성된다.
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click",deleteHandler)
    deleteBtn.innerText = "❌"
    todoListUl.appendChild(todoLi) //li 어펜드차일드
    todoLi.appendChild(todoLiSpan) //span 자식 스팬 어펜드차일드
    todoLi.appendChild(deleteBtn)//deltebtn 어펜드차일드
}

todoForm.addEventListener("submit",handleToDoSubmit) //투두폼이 submit 된다면 handleToDoSubmit 실행

const todoGet = localStorage.getItem("todo")

if(todoGet !== null){  //로컬스트리지 todo키의 밸류가 비어있지않다면.
    const parseToDo = JSON.parse(localStorage.getItem("todo"));
    console.log(parseToDo) //todo 밸류들을 JSON.parse를 사용해 데이터로 사용할수있는 형태로 만든다 [문자열들을 배열로 만듬]
    parseToDo.forEach(paintToDo) //parseToDo의 배열값을 forEach를 사용해 PaintToDo 함수를 돌린다.
    //하지만 여기서 문제가발생한다. 새로고침시 없어지진않으나, 새로운 값을 집어넣으면 그전값들이 사라진다.
    todoSaved = parseToDo; //로컬스트리지 todo의 밸류값을 실제사용할수있는 변수로 만들어 let으로선언된 todoSaved에 저장 (여기서 일치시켜줘야 새로고침시 초기화가안된다. )
    //추후에 todoSaved는 문자화되어 로컬스트리지에 저장된다.
    console.log(parseToDo) //로컬스트리지 todo 밸류값들이 실제배열로 들어오는것을 확인
}
