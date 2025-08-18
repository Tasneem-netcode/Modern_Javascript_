//arithematic operators:
let a = 10, b = 3;

console.log(a + b); // 13  (Addition)
console.log(a - b); // 7   (Subtraction)
console.log(a * b); // 30  (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1   (Modulus: remainder)
console.log(a ** b); // 1000 (Exponentiation ES6)
 

//assignment operator :
let x = 5;
x += 2; // x = x + 2 → 7
x -= 1; // x = x - 1 → 6
x *= 3; // x = x * 3 → 18
x /= 2; // x = x / 2 → 9
x %= 4; // x = x % 4 → 1

//Increment and Decrement Operators:

let y = 5;
console.log(++y); // 6 (pre-increment: increase first, then use)
console.log(y++); // 6 (post-increment: use first, then increase)
console.log(y);   // 7
console.log(--y); // 6 (pre-decrement: decrease first, then use)
console.log(y--); // 6 (post-decrement: use first, then decrease)
console.log(y);   // 5

// Comparison Operators:
console.log(5 == "5");  // true  (loose equality, type conversion ❗)
console.log(5 === "5"); // false (strict equality, no type conversion ✅)
console.log(5 != "5");  // false
console.log(5 !== "5"); // true
console.log(10 > 5);    // true
console.log(10 <= 5);   // false
console.log(5 < 10);    // true
console.log(10 >= 10);  // true
console.log(5 < 5);     // false
console.log(5 > 5);     // false

//logical operators:
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)
console.log(!false);        // true
console.log(true && true);  // true  (AND)
console.log(false || false); // false (OR)
console.log(true || true);  // true  (OR)
console.log(false && true); // false (AND)
console.log(true || false); // true  (OR)
console.log(false && false); // false (AND)

//Bitwise Operators:
console.log(5 & 1); // 1 (AND)
console.log(5 | 1); // 5 (OR)
console.log(5 ^ 1); // 4 (XOR)
console.log(~5);    // -6 (NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2  (Right shift)
console.log(5 >>> 1); // 2 (Unsigned right shift)

//unary operators:
let num = 5;
console.log(typeof num); // "number" (type of num)
console.log(typeof "Hello"); // "string"
console.log(typeof null); // "object" (quirk in JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof true); // "boolean"
console.log(typeof Symbol("symbol")); // "symbol"
console.log(typeof BigInt(123)); // "bigint"

console.log(typeof NaN); // "number" (NaN is a number type)
console.log(typeof []); // "object" (arrays are objects in JavaScript)
console.log(typeof {}); // "object" (objects are objects in JavaScript)
console.log(typeof function(){}); // "function" (functions are a special type of object)
console.log(typeof document.all); // "undefined" (quirk in JavaScript, document.all is a legacy feature)
console.log(typeof Symbol()); // "symbol" (ES6 feature for unique identifiers)

console.log(+"5");    // 5 (string → number)
console.log(+true);   // 1
console.log(+false);  // 0

console.log(-"5");   // -5
console.log(-true);  // -1

let x1 = 10;
console.log(++x1); // 11
console.log(x1--); // 11 (then becomes 10)


// Conditional (Ternary) Operator:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes
