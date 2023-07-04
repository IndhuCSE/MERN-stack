//DAY1

// variable ame can be declare in three ways.
//var,const and let
//var a=10;
//const a=10;
//let a=10;
//var can be reassigned and redeclared.
//let cannot be redeclares but can be reassigned.
//const cannot be reassigned and redeclared.
//let a=10;
//let a=20;
//shows an error
//let a=10;
//a=20;
//op:20
//there are four scopes localscope,global scope,block scope and 
//local scope
/*function a(){
    var sum=10
    console.log(sum);
}*/
//global scope
//var sum=10
/*function a(){
    console.log(sum);
}*/
//nested scope
//function res(){
    //var a=10;
    //function res1(){
        //var b=20;
       //console.log(b)
       //console.log(a)
  //  }
//}
//block scope
/*if(true)
{
  var v1 =10;
  let v2=20;
  console.log(v1);
  console.log(v2); 
}

console.log(v1);
console.log(v2);
//arrow function
//var res=(a,b)=>{
   //return  sum=a+b
//}
//anonymous function
//var res=function(a,b){
    //return a+b;
//}
//named function
//function res(a,b){
    //return a+b
//}
//hoisting
//hoisting done in var and functions.
//js is executes twice first top to bottom.so it stores all the variables names in undefined keyword
console.log(a)
const a=20
//op:undefined
//if it is function it will take the function reference to the top.
console.log(a)
function hoist(){
    var a=20;
}
//higher order function
either argument is funtion or return as a function.
const factor=(a)=>{
    return function(b){
        return a*b;
    }
}
const res=factor(3)(5)-->it is called currying
console.log(res)
//mamipulating array
//push
//pop
//shift
//unshift
var str=[1,2,'hello'];
str.push(4)-->insert at the end
str.pop()-->delete the end and returns.
str.unshift(1)-->adds the element in front
str.shift()-->remove the element in front
//splice
var arr=[1,2,3,4,5];
var array=arr.splice(2,3);
console.log(arr)//1,2
console.log(array)//3,4,5
//string reverse
var rev=(str)=>
{
   return  str.split("").sort().join('')
}

var res=rev('teacher')
console.log(res)
//string replace
ar rep=(str)=>
{
   return  str.split("o").join('u')
}

var res=rep('orango')
console.log(res)
//set interval and clear interval
function move() {
  const element = document.getElementById("myBar");
  let width = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++;
      element.style.width = width + '%';
    }
  }
}
//timeout
const myTimeout = setTimeout(myGreeting, 5000);
const myTimeout = setTimeout(myGreeting, 5000);

function myStopFunction() {
  clearTimeout(myTimeout);
}
//callback
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
//anagram
var anagram=(str,str1)=>
{
   return  str.split("").sort().join('')==str1.sort().join('')
}

var res=anagram('silent','listen')
console.log(res)
//palindrome
var pal=(str)=>
{
   return str== str.split("").reverse().join('')
}

var res=pal('madam')
console.log(res)
//regex
let text = "Visit W3Schools.\0Learn Javascript.";
let pattern = /\0/;
//search for null expression*/
