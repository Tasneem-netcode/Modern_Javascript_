console.log("Welcome to the JavaScript Console!");

//Ask details :
let name = prompt("What is your name?");
let age = prompt("Whats your age?");
let favLang = prompt("What is your favorite programming language?");

alert(`hello ${name} , you are ${age} years old and you love coding in ${favLang}`);

console.log("%c ---user info---", "color: blue; font-size: 20px; font-weight: bold;");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Favorite Language: ${favLang}`);

console.info("Data collected successfully!");
console.warn("Remeber : This is just a demo, no data is saved"); 
