//Synchronous JavaScript Example

console.log("Starting sync operation...");
function wait(){
    for(let i = 0 ; i<1e9; i++){}
    console.log("Inside wait function.");
}

wait();
console.log("Sync operation finished.");

//Asynchronous JavaScript Example
console.log("Starting async operation...");
setTimeout(() => {
    console.log("Inside setTimeout callback.")
}, 2000);
console.log("Async operation initiated.");


//Callback Example
// function RunsAfterSomeTime(val){
//     setTimeout(() => {
//         console.log("Value is: " + val);
//     }, 3000);
// }
// RunsAfterSomeTime(42);


function RunsAfterSomeTime(val){
    setTimeout(() => {
        console.log("Value is: " + val);
    }, Math.floor(Math.random() * 10)*1000);
}
RunsAfterSomeTime(30);