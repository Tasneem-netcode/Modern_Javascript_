// List:

// Object:
let person = {
    name: "Alice",
    age: 30,
    isActive: true
};
console.log(typeof person); // This will log "object"
// Array:
let colors = ["Pink" , "bLUE", "Yellow"];
console.log(typeof colors); // This will log "object" (arrays are a type of object in JS)

// Function:
function greet() {
    console.log("Hello, World!");
}
console.log(typeof greet); // This will log "function"
// Date
let today = new Date();
console.log(today);
console.log(typeof today); // object

// RegExp
let pattern = /hello/i;
console.log(pattern.test("Hello World")); // true
console.log(typeof pattern); // This will log "object"


// Map / Set (ES6):
let map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // Alice

let set = new Set([1, 2, 2, 3]);
console.log(set); // {1, 2, 3}
console.log(typeof map); // This will log "object"



