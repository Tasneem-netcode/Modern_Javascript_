//how to store data in local storage -setItem(key, value)
localStorage.setItem("name", "John Doe");

//how to retrieve data from local storage -getItem(key)
let data_in_local_storage = localStorage.getItem("name");

//how to remove data from local storage -removeItem(key)
localStorage.removeItem("name");

//how to clear all data from local storage -clear()
// localStorage.clear();

//Update data in local storage
localStorage.setItem("name", "John raj"); // Update the value of the key
let new_data = localStorage.getItem("name");

console.log(new_data); // Output: John raj
// Note: localStorage only stores string data. If you want to store objects or arrays, you need to convert them to a string using JSON.stringify() and parse them back using JSON.parse() when retrieving.

// Example of storing and retrieving an object
let user = {
    username: "johndoe",
    email: "johndoe@example.com",
    age: 30
};

localStorage.setItem("user", JSON.stringify(user));
// let data = localStorage.getItem("user");
// console.log(data); // Output: {"username":"johndoe","email":"
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser); // Output: {username: "johndoe", email: "johndoe@example.com", age: 30}