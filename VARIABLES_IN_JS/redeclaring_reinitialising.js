//reassignment and redeclaration in JS

var a =12 ;
a= 34 ;//reassignment
var a = 56 ;//redeclaring

let b = 45 ;
b =90;//reassignment

// let b = 78 ;//error, let cannot be redeclared

//Temporary Dead Zone (TDZ) example:
console.log(c); // This will throw an error because c is not defined yet
let c = 100; // let is not hoisted in the same way as var
