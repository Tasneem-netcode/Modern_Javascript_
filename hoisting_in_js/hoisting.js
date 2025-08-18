//var
console.log(a); // undefined (not error ❗)
var a = 10;
console.log(a); // 10
// Hoisting in JavaScript: variable declaration is hoisted, but not initialization


//let amd const 
console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;

console.log(c); // ❌ ReferenceError (TDZ)
const c = 30;

//Function hoisting:
sayHi(); // ✅ Works (function hoisted)

function sayHi() {
  console.log("Hello!");
}

sayHello(); // ❌ TypeError

var sayHello = function() {
  console.log("Hi!");
};
