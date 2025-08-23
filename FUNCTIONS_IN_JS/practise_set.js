greet();
function greet(){
    console.log("Hello JS!");
}

let multiply2 = (a, b) =>{
    return a*b;
};

//3 Identify parameter and argument:
function sayHello(name){ // name is parameter
    console.log(`hi ${name}`);
}
sayHello("I am name");// argument 

function hello(name = "Guest"){
    console.log("Hi", name);
}
hello(); //Hi guest


// ... operator
function operatorDot(...val){
    console.log("This is rest parameter that take many arguments")
    console.log(val);
}
console.log(operatorDot(1,2,3,4,5,6,7,8,9,10));


function getScore(...scores){
    console.log(scores);
    let total = 0;
    scores.forEach(function(arrval){
          total = total+arrval;
    });
    return total;
}
console.log(getScore(12, 56, 24, 18, 13, 15,32,16));

//expression function:
let expFun = function(){
    console.log("This ia an function expression stored in a variable");
}
expFun();


//function passed as argument :
function mainfun(para){
    para();
}
mainfun(function(){
    console.log("hey i am functions passed as argument in the mainfun function")
});


//HOF:
function abcd(){
    return function(){
         console.log("This is a function that is returning another function");
    }
}
abcd()();

//or:
function takesAsArgument(val2){
    console.log("Hey, am higher order function HOF");
    val2();
}
takesAsArgument(function(){
    console.log("Hey, am a function passed as argument to make a HOF")
})

let doubled =[1, 2, 3].map(function(x){ // here map is HOF 
    return x*2;
});
console.log(doubled);


//closure:
function ClosureInJs(){
    let b =10;
    return function(){
        console.log(b);
    };
}
console.log(ClosureInJs()());

//IIFE function:
(function init(){
    console.log("Initialized");
})();

//Counter using closures:
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());


//IIFE FOR HIDDING :
(function(){
  const password = "Secret password";
  console.log(password);
})();

// console.log(password);//error


//Anonymous function:
setTimeout(function () {
  console.log("I’m anonymous!");
}, 5000);

setInterval(function(){

})

//function declaration:
function square(n){
    return n*n;
}
console.log(square(5));
//Function expression:
const double = function(n){
    return n*2;
};
console.log(double(5));

//arrow function:
const add = (a, b)=>{
    return a+b;
}
console.log(add(2, 6));

//rest parameters :
function sumAll(...num){
    return num.reduce((acc, val) => acc + val, 0);

}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

//callback function:
function calculate(a, b,callback) {
    return callback(a, b);
}
console.log(calculate(2, 10, function(a, b){
    return a+b;
}));

// Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("JS Rocks!");
})();

//closure
function makeCounter2() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}