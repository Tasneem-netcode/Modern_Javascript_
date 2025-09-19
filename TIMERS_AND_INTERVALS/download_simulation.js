let progress = 0;
let sec = 10; // total seconds for download simulation
let progressBar = document.querySelector(".progress-bar");
let percentagetext = document.querySelector(".percentage"); 

let downloadInterval = setInterval(() => {
    if(progress < 100){
        progress++;
        progressBar.style.width = progress + "%";
        percentagetext.textContent = progress + "%";
    }

    else{
       document.querySelector("h2").textContent = "Download Complete!";
         clearInterval(downloadInterval);
    }

}, 10000 / 100); // Simulate 10 seconds total for full download (100 increments)
// },(sec * 1000) / 100 //to make it in any give sec 

