//Call Back
function greetUser(name, callback){
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye(){
    console.log("Goodbye!");
}
greetUser("Alice", sayGoodbye);

//Async Call Back
function getData(callback){
    console.log("Fetching data...");

    setTimeout(() => {
        console.log("Data fetched.");
        callback();
    }, 2000);
}

function processData(){
    console.log("Processing data...");
}

getData(processData);





//Callback Hell Example
function fetchUserData(username , callback){
    console.log("Fetching user data for  " + username);
    setTimeout(() => {
        console.log("User data fetched for " + username);
        callback({_id : 10001,  username: username, age: 25, email: username + "@example.com" });
    }, 2000);
}

function getAllPosts(id, callback){
    console.log("Fetching posts for user id: " + id);
    setTimeout(() => {
        callback({postId: 501, title: "Async Programming in JS", content: "This is a post about async programming."})
    }, 2000);

}

function savedPost(id , callback){
    console.log("Saving post for user id: " + id);
    setTimeout(() => {
        const postId = Math.floor(Math.random()*1000);
        const title = "OrageMoon";
        const content = "This is a post about OrageMoon.";
        callback({postId, title, content} , "Post saved successfully for user id: " + id);

    }, 2000);
}
fetchUserData("john_doe", (userData) => {
    console.log("Fetching User Data...");
    console.log("Username: " + userData.username);
    console.log("Age: " + userData.age);
    console.log("Email: " + userData.email);

    getAllPosts(userData._id, (posts) => {
        console.log("Posts for user " + userData.username);
        console.log("Post ID: " + posts.postId);
        console.log("Title: " + posts.title);
        console.log("Content: " + posts.content);
    })

    savedPost(userData._id, (newPost, message) => {
        console.log(message);
        console.log("New Post ID: " + newPost.postId);
        console.log("New Title: " + newPost.title);
        console.log("New Content: " + newPost.content);
    })
    });