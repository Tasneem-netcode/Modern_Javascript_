//Global scope:
//1. Variables declared outside of any function or block are in the global scope.
//2. They can be accessed from anywhere in the code.
//3. Not within any curly braces {}.
var globalVar = "I am a global variable";
console.log(globalVar); // Accessible anywhere

var globalNum = 10;
console.log(globalNum); // Accessible anywhere

//Function scope:
//1. Variables declared within a function are in the function scope.
//2. They can only be accessed within that function.
function myFunction() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // Accessible within the function
    var functionNum = 20;
    console.log(functionNum); // Accessible within the function
}
myFunction();
// console.log(functionVar); // Error: functionVar is not defined
// console.log(functionNum); // Error: functionNum is not defined

function anotherFunction() {
    let anotherFunctionVar = "I am another function variable";
    console.log(anotherFunctionVar); // Accessible within the function
    let anotherFunctionNum = 30;
    console.log(anotherFunctionNum); // Accessible within the function
}
anotherFunction();
// console.log(anotherFunctionVar); // Error: anotherFunctionVar is not defined
// console.log(anotherFunctionNum); // Error: anotherFunctionNum is not defined


//Block scope:
//1. Variables declared with let or const within a block (e.g., inside curly braces {}) are in the block scope.
//2. They can only be accessed within that block.
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible within the block
}

// console.log(blockVar); // Error: blockVar is not defined