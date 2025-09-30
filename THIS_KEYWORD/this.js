// This is a simple demonstration of the 'this' keyword in JavaScript
console.log(this); // In a browser, this will log the Window object

function showThis() {
    console.log(this); // In a regular function, 'this' refers to the global object (Window in browsers)
}
showThis();

const person = {
    name: "Alice",
    age :22,
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.greet()); // 'this' refers to the 'person' object


//This in Arrow Function
const obj = {
    username: "Bob",
    age: 30,
    greet: () => {
        return `Hello, my name is ${this.username} and I am ${this.age} years old.`; // 'this' does not refer to 'obj' here
    }
};
console.log(obj.greet()); // 'this' refers to the global object, so username and age are undefined



//This in Event Listeners
document.querySelector("h1").addEventListener("click", function() {
    console.log(this); // 'this' refers to the element that received the event (h1)
    console.log(this.style.backgroundColor = "lightyellow");
});

// In event listeners , this keyword always refers to the element that received the event.


//This in classes
class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;

    }
};
const myCar = new Car("Toyota", "Camry");
console.log(myCar); // 'this' refers to the instance of the class (myCar)


//this keyword in object within a method
const user = {
    uname : "Charlie",
    age: 28,
    sayName: function(){
        let innerFunction= () => {
            console.log(this.uname); // 'this' refers to the 'user' object because arrow functions do not have their own 'this'
        };
        innerFunction();
    }
};
user.sayName(); // Logs "Charlie"