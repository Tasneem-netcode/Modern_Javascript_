
let username = document.querySelector("#name");
let form  = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
   if(username.value.length <=  2){
     document.querySelector("#hide").style.display = "block";
   }else{
      document.querySelector("#hide").style.display = "none";
   }
});