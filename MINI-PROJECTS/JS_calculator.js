let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+ ,- , * , / , ** , %) ");

let result;

if(operator === "+"){
    result= num1+num2;
}
else if(operator === '-'){
    result = num1 - num2;
}
else if(operator === '*'){
    result = num1* num2;
}
else if (operator === '/'){
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

}
else if(operator === '%'){
    result = num1 % num2 ;
}else{
    result = "Invalid , please try again!!";
}

console.log(`Result of ${num1} ${operator} ${num2} = ${result}`);
alert(`Result of ${num1} ${operator} ${num2} = ${result}`);
