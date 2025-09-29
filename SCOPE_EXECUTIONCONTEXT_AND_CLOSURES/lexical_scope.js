// Lexical Scope
// Variables defined outside a function are accessible inside the function
let outsideVar = "I am outside!";
function checkScope() {
    console.log(outsideVar); // Accessible
    let insideVar1 = "I am inside! checkScope function";
    console.log(insideVar1); // Accessible
    // console.log(insideVar); // Error: insideVar is not defined
    function innerFunction() {
        let insideVar = "I am inside!";
        console.log(insideVar); // Accessible
        console.log(outsideVar); // Accessible
        console.log(insideVar1); // Accessible
    }
    innerFunction(); 
    // console.log(insideVar); // Error: insideVar is not defined
}

checkScope();
// console.log(insideVar); // Error: insideVar is not defined
// innerFunction(); // Error: innerFunction is not defined
// console.log(outsideVar); // Accessible
// console.log(insideVar1); // Error: insideVar1 is not defined
// console.log(insideVar); // Error: insideVar is not defined
// console.log(insideVar); // Error: insideVar is not defined

let b = 20;
function outer(){
    let a  = 10;
    console.log(`Value of b ${b}`); // 20
    console.log(`Value of a from outer : ${a}`); // 10
    function inner(){
        console.log(`Value of a from inner : ${a}`); // 10
        console.log(`Value of b ${b}`); // 20
    }
    inner(); // Call inner to see the value of a
}
outer(); // Call outer to execute the code inside