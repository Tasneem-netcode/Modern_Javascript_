//Class:
class CreatePencils {
    constructor(name, company , price , color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((e) => {
            if(e.style.color === this.color){
                e.remove();
            }
        });
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let p1 = new CreatePencils("Nataraj", "Nataraj Ltd", 10, "red");
let p2 = new CreatePencils("Apsara", "Apsara Ltd", 15, "blue");

// This and new keyword:
function CreateBooks(name, author, price){
    // this = {} // Implicitly
    this.name = name;
    this.author = author;
    this.price = price;
}
//New keyword creates an empty object and assigns it to this keyword.
let book1 = new CreateBooks("Book One", "Author One", 200);
let book2 = new CreateBooks("Book Two", "Author Two", 300);
console.log(book1);
console.log(book2);

//Prototype:
CreateBooks.prototype.company = "Amazon Book Ltd";
CreateBooks.prototype.getDiscountedPrice = function(discount){
    return this.price - (this.price * discount / 100);
};

book1.price = book1.getDiscountedPrice(10);

// 1. Constructor Function (the blueprint)
function Animal(name) {
    this.name = name; // Own property on the instance
}

// 2. Methods are added to the Animal.prototype object
// This ensures that all instances share a single copy of the method.
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

// 3. Creating an Instance (the object)
const dog = new Animal("Buddy"); // new creates a dog object

// 4. The link is established:
// dog.[[Prototype]] (or dog.__proto__) === Animal.prototype
dog.speak(); // Output: Buddy makes a sound.




function CreatePencil(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;

    }
CreatePencil.prototype.write= function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
}

let pencil1 = new CreatePencil("Nataraj", "Nataraj Ltd", 10, "red");
let pencil2 = new CreatePencil("Apsara", "Apsara Ltd", 15, "blue");