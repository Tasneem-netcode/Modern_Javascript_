let coffee = {
    name: "Latte",
    price: 4,
    drink: function() {
        console.log(`Enjoy your ${this.name}!`);
    }
};

let specialCoffee = Object.create(coffee);
console.log(specialCoffee);
specialCoffee.name = "Vanilla Latte";
specialCoffee.price = 5;
specialCoffee.drink = function() {
    console.log(`Enjoy your special ${this.name}!`);
};

//Prototype Inheritance will allow us to use the properties and methods of the parent object.
