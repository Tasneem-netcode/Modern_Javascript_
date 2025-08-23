//functions function_name(){
      //code 
      //return .....
// }

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Anna");  
greet("Ali");

//Hoisting In Functions
hny();// we can call a function before its declared or defined using hoisting

function hny(){
    console.log("Happy New Year");
}

// Function declaration
function name(){
    console.log("Anna");
}
name();

// function_Expression
// A function can be stored inside a variable also 
let greet2= function(){
    console.log("Hello world!!!!!!!");
}

greet2();

//Arrow Function(ES6+):
let sayhi = ()=>{
    console.log("hi js");
}
sayhi();

//parameters and arguments:
// Parameters → a, b
function add(a, b) {
  return a + b;
}

// Arguments → 5, 10
console.log(add(5, 10)); // 15


//default parameters:
function greet3(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet3("Wani")); // Hello, wani!
console.log(greet3());          // Hello, Guest!


//rest parameter:
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


//arguments object:
function showArgs(){
    console.log(arguments);
}
showArgs(1, 2, 3, "hello", "you");
// Arguments { 0: 1, 1: 2, 2: 3, 3: "hello", 4: "you", … }


//positional arguments:
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(2, 10)); // 0.2


//spread with argument:
function multiply(a, b, c){
    return a*b*c;
}
const nums = [4,7,2];
console.log(multiply(...nums));


//return values in function:
function abcd(){
    return 12;
}
console.log(abcd());

//first order functions:When functions are treated as values (variables) in js then its called first order-function
//passing a function as argument :
function origin(val){
     val();
}
origin(function(){
  console.log("This is the function passed as argument to origin functions parameter val");
});

function run(fn) {
  fn();
}
run(() => console.log("I was passed as an argument!"));


//store as variable:
const sayHi = function() {
  console.log("Hi!");
};
sayHi(); // Hi!


//Return from another function:
function adder(x){
  return function(y){
    return x+y;
  };
}
// const add5 = adder(5)
// add5(10);
console.log(adder(2)(5));

//higher order function:
function sayhello(name){
  return `hello, ${name}`;
}
function processUser(name, callback){
  console.log(callback(name));
}

processUser("Waniya", sayhello);

//return a function for hof:
function multiplier(x){
  return function(y){
    return x*y;
  };
}
console.log(multiplier(2)(5));


//pure functions:
function add(a , b){
  return a+b;
}
console.log(add(2, 3));
console.log(add(2, 3)); // same input and same output 


//impure functions
let count = 0;
function increment(){
  count++;
  return count;
}
// no matter howmany times i call the same function i get different outputs that change the value of count , these are impure functions
console.log(increment());//1
console.log(increment());//1+1 = 2 
console.log(increment());//2+1 = 3 
console.log(increment());//3+1 = 4


//closures:
function outer() {
  let secret = "I am hidden 🤫";

  function inner() {
    console.log(secret); // inner still has access to "secret"
  }

  return inner;
}

// const fn = outer(); // outer() runs and finishes
// fn(); // logs: I am hidden 🤫
outer()();

function makeCounter(){
  let count = 0 ;
  
  return function(){
  count++;
  return count;
  };
}

console.log(makeCounter()());
console.log(makeCounter()());
console.log(makeCounter()());
const mc = makeCounter();

console.log(mc());
console.log(mc());
console.log(mc());
console.log(mc());


//IIFE:
(function(){
  console.log("This is IMmEDIATELY INVOKED FUNCTION that runs immediately")
})();

///with parameters:
(function(name){
   console.log(`hello, ${name}`);
})("I am name");

//return a value:
let result = (function(a, b) {
  return a + b;
})(5, 10);

console.log(result); // 15

