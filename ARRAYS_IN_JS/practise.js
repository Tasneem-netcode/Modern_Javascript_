//create an array with 3 values and acess the 2nd value:
let myarray  = ["value1", "value2", "value3"];
console.log(myarray[1]);

let fruits = ["apple", "banana"];
fruits.push("Mango");
fruits.unshift("Pineapple");//adds element to the beginning 

let numbers = [1,2,3,4];
numbers.pop();
console.log(numbers);


//insert red and blue at index 1 :
let colors = ["green", "yellow"];
colors.splice(1, 0 , "red", "blue");//zero is the delete count , that means we are not removing any elements if we use zero

//extract only the middle 3 elements from array :
let items = [1,2,3,4,5,6,7];
let newarr = items.slice(2, 5);
console.log(newarr);

//sort an array alphabetically and then reverse it:
let names = ["farhana", "zain", "ali", "sana", "faizal"];
let sortedandrev = names.sort().reverse();
console.log(sortedandrev);

//use map to square each numbers :
let numbersval = [1, 2, 3, 4, 5];
let squared = numbersval.map((num)=> num * num);
console.log(squared);

//greater then 10
let arrbe = [10 , 15, 23, 9, 3];
let greaterthen10 = arrbe.filter((num) => num > 10);
console.log(greaterthen10);

//
let arr = [10, 20 , 30];
let arrsum = arr.reduce((acc , curr) =>{
    return acc + curr;
},0);
console.log(arrsum);

//use .find() to get first number less then 10
let arr2 = [3,6,90];
let lessthen10 = arr2.find((num)=> num < 10);
console.log(lessthen10);

//.some() to check any student scored below 35:
let marks = [59, 45, 20 , 19 , 30];
let hasfailed = marks.some((mark) =>{
    return mark < 35;
});
console.log(hasfailed);

let arr5 = [2, 4, 6, 8, 10];

let even = arr5.every((num) =>{
    return num % 2 === 0;
});
console.log(even)

let firstandlastname = ["harsha", "singh"];
let [firstname, lastname] = firstandlastname;

let a = [1, 2];
let b = [3, 4];

let c = [...a , ...b];
console.log(c);

let country = ["usa", "korea"];
let newcountry = ["india", ...country];
console.log(newcountry);