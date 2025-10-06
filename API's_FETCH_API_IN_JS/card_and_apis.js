fetch("https://randomuser.me/api/")
.then((response) => {
    return response.json(); // Parse the JSON from the response to a JavaScript object , so that we can use it
})
.then((data) => {
    console.log(data.results[0].name.first); // Access the first name of the user from the data object
})
.catch((error) => {
    console.log("Error: " + error);
});



fetch("https://randomuser.me/api/?results=5000")
.then((response) => response.json())
.then((data) => {
        // data.results.forEach(user => {
            //     console.log(user.name.first + " " + user.name.last);
            // });
            console.log(data.results);
        })
        .catch((error) => {
                console.log("Error: " + error);
            });