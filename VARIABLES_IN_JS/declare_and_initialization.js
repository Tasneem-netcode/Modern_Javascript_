//declaration and initialization of variables in js
var greeting ; // We can declare a variable without initializing it
var greeting = "Hello, World!"; //We can also declare and initialize a variable

if(true){
    var x = 10; // var is function scoped, so this x is accessible outside the block
    let y = 20; // let is block scoped, so this y is not accessible outside the block
}
console.log(x); // This will log 10
// console.log(y); // This will throw an error because y is not defined outside the block

console.log(a);//no error, but undefined
var a = 5; // This will log 5 because a is hoisted
console.log(a)

//let:
console.log(b); // This will throw an error because b is not defined yet
let b = 10; // let is not hoisted in the same way as var
console.log(b); // This will log 10


//const:
const c = 15; // const must be initialized at the time of declaration
// console.log(d); // This will throw an error because d is not defined yet
// const d; // This will throw an error because const must be initialized
const d = 20; // This is valid, but d cannot be reassigned later
console.log(c); // This will log 15
console.log(d); // This will log 20

function abc(){
    if(true){
        var e = 30; // var is function scoped, so this e is accessible outside the block
        let f = 40; // let is block scoped, so this f is not accessible outside the block
    }
    console.log(e); // This will log 30
    // console.log(f); // This will throw an error because f is not defined outside the block
 }