//Rock paper seissor logic:
function rps(user , computer){
   if(user === computer) return "draw!";
   
   if(user === "rock" && computer === "scissor") return "user";
   if(user === "scissor" && computer === "paper") return "user";
   if(user === "paper" && computer === "rock") return "user";

   return "computer";
}

console.log(rps("rock", "scissor "));