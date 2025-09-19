//Timers:
setTimeout(function() {
    console.log("This message is shown after 3 seconds by setTimeout");
}, 3000); //3000 milliseconds = 3 seconds

setInterval(function() {
    console.log("This message is shown every 2 seconds by setInterval");
}, 2000); //2000 milliseconds = 2 seconds

// Clear interval after 5 counts
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);

    if(count === 5){
        clearInterval(intervalId);
        console.log("Interval cleared after 5 counts");
    }
}, 3000); //3000 milliseconds = 3 seconds

// Clear timeout example
let timeout = setTimeout(() => {
    console.log("This message is shown after 3 seconds by setTimeout");
}, 3000); //3000 milliseconds = 3 seconds

clearTimeout(timeout);
console.log("Timeout cleared before execution");