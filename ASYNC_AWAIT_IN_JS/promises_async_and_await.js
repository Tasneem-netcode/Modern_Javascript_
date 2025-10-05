let pr = new Promise((resolve , reject) => {
    setTimeout(() =>{
        let randomNum = Math.floor(Math.random()*10);
        if(randomNum > 2 ){
            resolve("Resolved! Number is: " + randomNum)
        }else{
            reject("Rejected! Number is: " + randomNum)
        }
    }, 2000)
});

pr.then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log("Error: " + error);
});


//Promise Example
// let promise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let success = false; // Change this to false to test rejection

//         if(success){
//             resolve("Data fetched successfully!");
//         }else{
//             reject("Error fetching data.");
//         }
//     }, 2000);
// });

// promise.then((message) => {
//     console.log("Success: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// });



//Async/Await Example
let promiseForAsync = new Promise((resolve , reject) => {
    setTimeout(() => {
        let success = true; // Change this to false to test rejection

        if(success){
            resolve("Data fetched successfully!");
        }else{
            reject("Error fetching data.");
        }
    }, 2000);
});
async function fetchData(){
    try{
        let resolvedMessage = await promiseForAsync;
        console.log("Success: " + resolvedMessage);
    }catch(error){      
        console.log("Error: " + error);
    }
}
fetchData();