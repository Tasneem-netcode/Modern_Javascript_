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