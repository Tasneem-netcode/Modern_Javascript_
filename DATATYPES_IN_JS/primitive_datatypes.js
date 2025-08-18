//  List of primitive types:

// Number:
let age = 25; // Example of a number
let pi = 3.14; // Example of a floating-point number
console.log(typeof age); // This will log "number"


// String
let name = "Alice"; // Example of a string
let greeting = `hello ${name}`; // Template literal
console.log(typeof greeting); 
// Boolean:
let isActive = true; // Example of a boolean
let isLoggedIn = false; // Another boolean example
console.log(typeof isActive); // This will log "boolean"
// Undefined:
let x ;
console.log(x); // This will log "undefined" because x is declared but not initialized
console.log(typeof x); // This will log "undefined"
// Null:
let data = null;
console.log(data); // null
console.log(typeof data); // ⚠ object (JS quirk)


// Symbol (ES6):
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // This will log false because symbols are unique

// BigInt (ES11)
let bigNumber = BigInt(1234567890123456789012345678901234567890);

