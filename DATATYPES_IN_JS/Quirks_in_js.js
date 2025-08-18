// Loose equality (==) coercion
"5" == 5        // true
"" == 0         // true
false == 0      // true
null == undefined // true
// [] == 0         // true
// Strict equality (===) no coercion
"5" === 5       // false
// "" === 0        // false
// false
// === 0        // false
// null === undefined // false
// [] === 0        // false
// Loose inequality (!=) coercion
"5" != 5        // false
"" != 0         // false
// false != 0      // false
// null != undefined // false
// [] != 0         // false

// Strict inequality (!==) no coercion
"5" !== 5       // true
// "" !== 0        // true
// false !== 0      // true
// null !== undefined // true
// [] !== 0        // true

// 2) + vs other operators
// Addition (+) operator
let sum = "5" + 5; // "55" (string concatenation)
let difference = "5" - 2; // 3 (numeric subtraction)
let product = "5" * 2; // 10 (numeric multiplication)
let quotient = "5" / 2; // 2.5 (numeric division)

// 3) Truthy / Falsy confusion
// Falsy values in JavaScript
if(0){
    console.log("This won't execute because 0 is falsy");
}
if(null){
    console.log("This won't execute because null is falsy");
}
if(undefined){
    console.log("This won't execute because undefined is falsy");
}

if(NaN){
    console.log("This won't execute because NaN is falsy");
}

if(false){
    console.log("This won't execute because false is falsy");
}
if(""){
    console.log("This won't execute because an empty string is falsy");
}
if(document.all){
    console.log("This will execute because document.all is truthy");
}

// typeof null 
typeof null ;// This will log "object" (this is a known quirk in JavaScript) a bug that has been around since the beginning of JavaScript
console.log(typeof null); // This will log "object" (this is a known quirk in JavaScript)