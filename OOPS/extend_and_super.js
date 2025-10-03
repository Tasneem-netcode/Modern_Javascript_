class Animals {
    constructor(name, color , age, sound){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

class Cat extends Animals{
    constructor(name , color , age, sound, breed){
        super(name, color , age, sound);
        super.speak();
        this.breed = breed;
    }
    meow(){
        console.log(`${this.name} says Meow`);
    }
}

let cat1 = new Cat("Whiskers", "Gray", 2, "Meow", "Siamese");
cat1.speak(); // Inherited method from Animals class
cat1.meow();  // Method from Cat class
