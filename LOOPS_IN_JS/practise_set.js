//print number from 1 to 10 using loop

for(let  i = 1; i<=10;i++){
    console.log(i);
}

//print number from 10 to 1 
for(let i = 10; i>=1; i--){
    console.log(i);
}

let start = 10;
while(start>=1){
    console.log(start);
    start--;
}

//even number from 1 to 20 using for loop

for(let i = 1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//print odd number from 1 to 15 using a while loop
let i = 1 ;
while(i<=20){
    if(i%2 !== 0){
        console.log(i);
    }
    i++;
}

//5 multiplication
for(let i =1 ; i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);
}

//find sum from 1 to 100 using loop:

let sum =0;
for(let i =1; i<=100;i++){
    sum +=i;
}
console.log(sum);

//print all number from 1 to 50 that is divisible by 3

for(let i =1 ; i<=50; i++){
    if(i%3 ===0){
        console.log(`${i} is divisible by 3`);
    }
}

//user input and print even or odd
// let val = prompt("Enter a number");
// for(let i =1 ; i<=val; i++){
//     if(i%2 ===0){
//          console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
        
//     }
// }

for(let i=1 ; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}

for(let i =1 ; i<=20;i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i)
}

let count =0;
for(let i =1 ; i<=100; i++){
    if(i%2 !==0){
        count++;
        console.log(i);
    }
    if(count === 5) break;
}

//count number of digits:
let number = 1234567;
let cnt =0;
while(number>0){
    cnt++;
    number = Math.floor(number/10);
}

console.log(`total digits are ${cnt}`);

