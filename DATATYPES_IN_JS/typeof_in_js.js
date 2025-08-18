// To check the datatypes in JavaScript, you can use the `typeof` operator. It returns a string indicating the type of the unevaluated operand. Here are some examples:
let a = 5; // Example of a number
console.log(typeof a); // This will log "number"

let name = "Alice"; // Example of a string
console.log(typeof name); // This will log "string"

let novalue = null;
console.log(typeof novalue); // This will log "object" (this is a known quirk in JavaScript)

let isActive = true; // Example of a boolean
console.log(typeof isActive); // This will log "boolean"

let notanumber = NaN; // Not a Number
console.log(typeof notanumber); // This will log "number" (NaN is of type number)

let noval;
console.log(typeof noval); // This will log "undefined" because noval is declared but not initialized