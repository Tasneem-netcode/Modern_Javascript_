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


class User{
    constructor(name, address, email, username, password){
        this.name = name;
        this.address = address;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = "user";
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name, address, email, username, password, adminCode){
        super(name, address, email, username, password);
        this.adminCode = adminCode;
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(h1 => h1.remove());
    }
}

let user1 = new User("Arisu", "Tokyo", "arisu@example.com", "ariarisu", "usagi1905");
user1.write("Hello, Usagi!");
let user2 = new User("Usagi", "Tokyo", "usagi@example.com", "usagi1905", "sailormoon");
user2.write("Hello, Arisu!");
user1.write("How are you?");
let admin = new Admin("Ryuji", "borderland", "ryuji@example.com", "ryujiwiwiwi", "usagiInborderland", "admin123");

admin.write("Hello, everyone!");
user2.write("Hi Ryuji! Welcome to our chat.");
admin.write(":) Thank you, Usagi!");