// Call
const obj = {
    name: "David",
};

function CallExample(greeting){
    console.log(`${greeting}, ${this.name}`);
}

CallExample.call(obj, "Hello"); // 'this' refers to 'obj'
// Output: "Hello, David"

// Apply
const obj2 = {
    name: "Eva",
};

function ApplyExample(greeting, punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`);

}
ApplyExample.apply(obj2 , ["Hello", "!"]); // 'this' refers to 'obj2'
// In apply, arguments are passed as an array

const Pokemon = {
    firstname : "Pika",
    lastname : "Chu",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

function displayPokemon(snack , hobby){
    console.log(`I am ${this.fullname()}, and I love ${snack} and ${hobby}`);
}

displayPokemon.apply(Pokemon, ["Sushi", "Gaming"]);



//Bind
const obj3 = {
    name: "Frank",
};
function BindExample(greeting){
    console.log(`${greeting}, ${this.name}`);
}
const boundFunction = BindExample.bind(obj3); // 'this' is bound to 'obj3'