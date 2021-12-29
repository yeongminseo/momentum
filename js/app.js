const yeongminCalc ={
    slice: function(a,b){
        return a/b
    },
    plus:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a*b
    }
    
}
const plusResult= yeongminCalc.plus(2,2)
const sliceResult= yeongminCalc.slice(4,2)
const subResult= yeongminCalc.sub(26,2)

const testResult = yeongminCalc.plus(plusResult,subResult)
console.log("testResult",testResult)

console.log(plusResult,sliceResult,subResult)
function carculateKorAge (age){
    return age+2;
    
}
const korAge=carculateKorAge(22)



console.log(korAge)

const age = parseInt(prompt("How old are you"))
console.log(isNaN(age))

if (isNaN(age)){
    age
    alert("please right a number")
    
}else if (age>=99 || age<=11){
    alert("please put age from 12 - 98")
}
else if (age>=18 && age<=32){
    alert("you can drink")
}else if (age>=33 && age<=80){
    alert("you are so old")
}else{
    alert("you are too young")
}