// Execution Context:
// 1. Global Execution Context
//    - Created when the JavaScript code starts executing.
//    - Contains global variables and functions.
console.log(globalVar); // Accessible anywhere

// 2. Function Execution Context
myFunction();
//    - Created when a function is invoked.
//    - Contains function-specific variables and parameters.
console.log(functionVar); // Error: functionVar is not defined
//    - Each function call creates a new execution context.
console.log(functionNum); // Error: functionNum is not defined
// 3. Block Execution Context (for let and const)
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible within the block
    const blockConst = "I am a block constant";
    console.log(blockConst); // Accessible within the block
    //    - Created for blocks (e.g., inside if, for, while) when using let or const.
    console.log(blockVar); // Accessible within the block
    console.log(blockConst); // Accessible within the block
}
//    - Variables declared with var do not create a block scope.
console.log(blockVar); // Error: blockVar is not defined
console.log(blockConst); // Error: blockConst is not defined
console.log(globalNum); // Accessible anywhere
console.log(anotherFunctionVar); // Error: anotherFunctionVar is not defined
console.log(anotherFunctionNum); // Error: anotherFunctionNum is not defined
console.log(blockVar); // Error: blockVar is not defined
console.log(blockConst); // Error: blockConst is not defined

//Global Execution Context
console.log(a); // undefined (hoisted)
sayHello();     // "Hello!"

var a = 10;

function sayHello() {
  console.log("Hello!");
}
