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

## 로컬스트리지 활용

localStorage.setItem("키",값)
localStorage.getItem("키",값)

if문을 활용해 로컬스토리지 특정 키값이 비워져있는지 (null값인지) 확인후
특정요소를 보여주거나, 숨기거나 할수있다.

## HTML에 엘리먼트 생성

document.creat("html태그")==
만들어진 요소는 property 형식으로 각 속성을 지정할수있으며
각 객체선택후 appenChild로 자식요소로 부여할수있다.
