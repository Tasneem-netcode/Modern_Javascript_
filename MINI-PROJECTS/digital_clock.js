// Run every second
// setInterval(function () {
//   let now = new Date();
//   let timeString = now.toLocaleTimeString();

//   document.getElementById("clock").textContent = timeString;
// }, 1000);

setInterval(() => {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    
      // Update the clock in HTML
    document.getElementById("clock").textContent=timeString;
}, 1000);
