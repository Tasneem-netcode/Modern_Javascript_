console.log("Welcome to the JavaScript Console!");
console.info("You can use info for informational messages and debugging.");
console.warn("This is a warning message. Use it to indicate potential issues.");
console.error("This is an error message. Use it to indicate errors in your code.");

console.debug("This is a debug message. Use it for debugging purposes.");
console.clear(); // This will clear the console
console.assert(false, "This is an assertion failure message. It will only log if the condition is false.");
console.time("Timer"); // Start a timer
console.count("Counter"); // Increment a counter
console.timeEnd("Timer"); // End the timer and log the elapsed time
console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]); // Log data in a table format
console.group("Grouped Messages"); // Start a group of messages
console.log("This is a message inside a group.");
console.groupEnd(); // End the group of messages
console.trace("This will log the stack trace of the current execution point.");
console.dir(document.body); // Log the properties of the document body element
console.dirxml(document.body); // Log the XML representation of the document body element
console.timeStamp("Timestamp"); // Add a timestamp to the console
console.profile("Profile"); // Start profiling
console.profileEnd("Profile"); // End profiling and log the results
console.log("You can also use console methods to log variables:");
let variable = "Hello, Console!";
console.log(variable); // This will log the value of the variable
console.groupCollapsed("Collapsed Group"); // Start a collapsed group of messages
