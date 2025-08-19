//if :
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

//if-else:
let age1 = 16;
if(age>18){
    console.log("You are adult");
}
else{
    console.log("You are minor")
}

//if.... else if .....else
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Fail ❌");
}


//ternary operator:
let a =20;
let status = (age>=18)? "Adult" : "Minor";
console.log(status);

//switch:
let day = 3 ;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;

    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursady");
        break;
    default:
        console.log("Invalid");
}
  