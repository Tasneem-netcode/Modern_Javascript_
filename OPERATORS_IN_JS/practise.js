let x = 10 ;
let y =20 ;

if(x>5 && y < 25){
    console.log("Both conditions are true");
} else{
    console.log("At least one condition is false");
}

let isadmin = true;
let isloggedin = false;

if(isadmin || isloggedin){
    console.log("Access granted");
}else {
    console.log("Access denied");
} 

let temp = 35;

if(!(temp < 30 )){// Using NOT operator
    console.log("It's hot outside");
}else{
    console.log("It's not hot outside");
}

let score = 78 ;
let grade = score >= 90 ? "A" : score>=80 ? "B" : score > 70 ? "C" : "Fail";
console.log(`Your grade is: ${grade}`); 

let loggedIN = true ;
let hasToken = false;

let access = loggedIN && hasToken ? "Access Granted" : "Access Deny";

console.log(access); // Access Deny

let a = 5;
a++;
console.log(a); // 6 (post-increment: use first, then increase)

let b =7 ;
++b;
console.log(b); // 8 (pre-increment: increase first, then use)

let q = 3 ;
let r = q++;
console.log(q , r)// 4 3 (post-increment: use first, then increase)

let p = 4 ;
let s = ++p;
console.log(p , s); // 5 5 (pre-increment: increase first, then use)

let m = 10 ;
console.log(m--);
console.log(m); // 10 9 (post-decrement: use first, then decrease)


let n = 5;
        //5 -> 6 , 6 ->7
let result = n++ + ++n; // 5 + 7 = 12
console.log(result); // 12

let count =5 ;
if(count-- === 5){
    console.log("Count is 5");
}else{
    console.log("Count is not 5");
}