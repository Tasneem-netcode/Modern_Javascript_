//Scope in JavaScript:
// Scope defines where in your code you can access (read/write) a variable.

// global scope
var globalvar = "I am global"; // This variable can be accessed anywhere in the code

function showGlobal() {
    console.log(globalvar); // This will log "I am global"
} 

console.log(globalvar); // This will also log "I am global"
showGlobal(); // This will also log "I am global"

//Function scope :
function myFunction() {
    var functionScopedVar = "I am function scoped ,local variable"; 
    console.log(functionScopedVar); // This will log "I am function scoped ,local variable"
}
myFunction(); // This will log "I am function scoped ,local variable"
// console.log(functionScopedVar); //error




// Block scope:
if(true){
    let blocklet = "I am block scoped";
    const blockconst = "I am also block scoped";
    var blockvar = "I am function scoped but declared in a block";
}
console.log(blocklet); //error, blocklet is not defined outside the block
// console.log(blockconst); // This will throw an error because blockconst is not defined outside the block
console.log(blockvar); // This will log "I am function scoped but declared in a block"


let a = 10 ; // This is block scoped
{
    let a = 20; // This is a different variable, also block scoped
    console.log("Inside:",a); // This will log 20
}
console.log("Outside:",a); // This will log 10, the outer variable


var b = 30; // This is function scoped
{
    var b = 40; // This is the same variable, function scoped
    console.log("Inside:",b); // This will log 40
}
console.log("Outside:",b); // This will log 40, the outer variable has been overwritten

const person = { fname: "Harsh", lname:"Raj"};
person.fname = "John"; 
person={}; // This will throw an error because person is a constant reference

// const you can update the values of the property , but cannot reassign const again