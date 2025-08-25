//Starting with arrays in JavaScript
//create an array
const fruits = ['apple', 'banana', 'orange'];
let arr = [1,2,3,4,5]

// Creating arrays
let numbers = [10, 2 , 46, 7, 34];   // array of numbers
let lang = ["Python", "JavaScript" , "cpp"]; // array of strings
let mixed = [1, "hello", true, null]; // mixed values

console.log(numbers); // [10, 2, 46, 7, 34]
console.log(fruits[1]); // "banana"
console.log(mixed[2]); // true

//Accessing array elements
console.log(numbers[0]);
console.log(numbers[2]);
console.log(mixed.length);

//Access Last Element :
console.log(numbers[numbers.length - 1]);
console.log(lang[lang.length - 1]);
console.log(mixed[mixed.length - 1]);

//modify array:
fruits[0] = 'kiwi';
numbers[1] = 60;

//Array Methods in Js:
//Push
numbers.push(50);
console.log(numbers);
lang.push("SQL");

//pop:
mixed.pop();// removes the last element from the mixed array
lang.pop(); // removes the last element from the lang array

//shift:
let removed1 =fruits.shift();
console.log(removed1);
let removed2 = numbers.shift();
console.log(removed2);


//unshift:
numbers.unshift(5);
fruits.unshift('mango');
lang.unshift("SQL");

console.log(lang);
console.log(fruits);
console.log(numbers);

//slice():
let newArray = numbers.slice(1 , 4);
console.log(newArray);
console.log(numbers);// [10, 2, 46, 7, 34] doesnt change the original array


//reverse:
numbers.reverse();
fruits.reverse();
lang.reverse();

console.log(lang);
console.log(fruits);
console.log(numbers);


//sort:
lang.sort();
console.log(lang);
fruits.sort();
console.log(fruits);
numbers.sort((a,b)=> a-b); // Ascending order for numbers
console.log(numbers); 

//join
let fruitsString = fruits.join(", ");
console.log(fruitsString);

//tostring():
let numbersString = numbers.toString();
console.log(numbersString);


//map
