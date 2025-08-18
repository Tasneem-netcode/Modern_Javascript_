//Computer picks a random number between 1 to 100:
let secretnumber = Math.floor(Math.random() * 100)+1;
let attempts = 0;
let guess;

alert("Welcome to the Guess The Number game , I am thinking a number between 1 to 100 , you have the guess that number");

while(guess !== secretnumber){
    guess = Number(prompt("Enter your guess:"));
    attempts++;

    if(isNaN(guess)){
        alert("Please enter a valid number:");
    } else if( guess < secretnumber){
        alert("Too low 📉, try again")
    }else if (guess > secretnumber){
        alert("Too high 📈, try again !");
    }
    else{
        alert(`Correct guess, the number is ${secretnumber}. You have guessed in ${attempts} attempts! `);
        console.log("Game Over ");
        break;
    }
}