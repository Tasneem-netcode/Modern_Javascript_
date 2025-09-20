// How to store data in session storage - setItem(key, value)
sessionStorage.setItem("sessionName", "Jane Doe");

// How to retrieve data from session storage - getItem(key)
let dataInSessionStorage = sessionStorage.getItem("sessionName");

// How to remove data from session storage - removeItem(key)
sessionStorage.removeItem("sessionName");

// How to clear all data from session storage - clear()
// sessionStorage.clear();

// Update data in session storage
sessionStorage.setItem("sessionName", "Jane Smith"); // Update the value of the key

console.log(dataInSessionStorage); // Output: Jane Doe
// Note: sessionStorage only stores string data. If you want to store objects or arrays, you need to convert them to a string using JSON.stringify() and parse them back using JSON.parse() when retrieving.

// Example of storing and retrieving an object
let sessionUser = {
    username: "janedoe",
    email: "janedoe@example.com",
    age: 25
};

sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));
// let data = sessionStorage.getItem("sessionUser");
// console.log(data); // Output: {"username":"janedoe","email":"
let retrievedSessionUser = JSON.parse(sessionStorage.getItem("sessionUser"));
console.log(retrievedSessionUser); // Output: {username: "janedoe", email: "janedoe@example.com", age: 25}