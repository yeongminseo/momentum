## 생성자함수

JavaScript에는 생성자 함수라는 것이 있다
new 를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다.
이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)
생성자 함수는 arguments를 받을 수 있다

console 에

const date = new Date();

를 입력하여 date 변수를 선언

typeof date;

를 입력해보시면 object를 반환하는 것을 볼 수 있음.
이렇게 생성한 date 객체를 이전시간에 배웠던대로
object.property 와 같은 형식으로 사용할수있다

--오브젝트.속성 과 같이 접근할수 있는것--


## 로컬스트리지 저장과 삭제

로컬스트리지에 저장/삭제는 해당 스트리지와 연결된 배열안의 데이터를
추가,삭제 후 로컬스트리지에 문자화 하여 업데이트하면된다.
삭제시에는 데이터를 불러와 배열화하여 삭제후 문자화하여 업데이트 하면된다.

오브젝트나 배열을 로컬스트리지에 넣을땐 문자화 해서 넣어야 원하는 형태로 넣을수있다.
## 투두리스트 만들며 깨달은점
todoSaved는 배열이기때문에 forEach처럼 아이디를받아 전체를 돌리지않고
todoSaved.id를 로그해도 뜨지않았다 그런데 todoSaved[0].id 과같이
번호를 매기고id를 받으려고하니 받을수있었다.

todoSaved.filter((todo)=>todo.id !== JSON.parse(li.id)) 의 (todo)는 todoSaved의 데이터들을 의미한다
todoSaved[0] ~ ... .id 를 의미한다.
filter((item)=> item.id === object.id) 는 forEach의 element 개념과 비슷한것같다.
배열안 전체 데이터의 id와비교하는데에 사용됬다.
즉 todoSaved 아이템들의 id와 내가선택한 델리트버튼의 부모 li 의 아이디가 같다면 지우게된다.

