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


//ForEach in arrays:
let array = [1,2,3,4,5,6];
array.forEach(function(elements){
    console.log(elements);
});

// with index
array.forEach(function(elements , index){
    console.log(`index: ${index}, elements : ${elements}`);
});

//with arrow function:
array.forEach((ele, index)=>{
    console.log(`index: ${index}, element : ${ele}`)
});

//map:
let newarray2 = array.map(num => num * 2);
console.log(newarray2);
console.log(array);

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];

let names = users.map(user => user.name);

console.log(names); // ["Alice", "Bob", "Charlie"]

let PriceUSD = [10, 20 , 30 ,40 ,50];
let priceINR = PriceUSD.map((priceinUSD) => {
    return {priceinUSD: priceinUSD , priceinINR: priceinUSD *83};
});

console.log(priceINR);
//using index in map:
let withIndex = array.map((num , index) => {
    return { index: index, value: num };
});
console.log(withIndex);

let number = [1, 2, 3];

let squared = number.map(function(num) {
    return num * num;   // 👈 must return
});

console.log(squared); // [1, 4, 9]
//using arrow function
let nums = [2, 4, 6];

let doubled = nums.map(num => num * 2); // implicit return (no {} needed)

console.log(doubled); // [4, 8, 12]


//correct way to return 
let doubled2 = nums.map(num => { return num * 2 }); 
console.log(doubled2); // [4, 8, 12]

//returning objects:
let namesarr = ["Alice", "Bob"];

let usersarr = namesarr.map(name => ({ username: name, active: true }));

console.log(usersarr);
// [ { username: "Alice", active: true }, { username: "Bob", active: true } ]


//filter:
let filtered = numbers.filter(num => num >2);
console.log(filtered);

let arr2 = [1,2,3,4,5,6,7,8,9];
let newarr = arr2.filter(num => num % 2 === 0);
console.log(newarr);

let newarr2 = arr2.filter(function(val){
    if(val > 5) return true;

});
console.log(newarr2);


let strlength = fruits.filter(fruit => fruit.length > 5);
console.log(strlength);
//filtering objects:
let people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 28}
];

let adults = people.filter(person => person.age >= 28);
console.log(adults);

//reduce:
let arr4 = [1,2,3,4,5,6];
let ans = arr4.reduce(function(accumulator , currentValue){
    return accumulator + currentValue;
}, 0);


let sum = numbers.reduce((accumulator , currentValue) => accumulator + currentValue , 0);
console.log(sum);

let arr3 = [1,2,3,4];
let product = arr3.reduce((acc , val) => acc * val , 1);
console.log(product);

let max = arr3.reduce((acc , val) => {
    if(val > acc) return val;
    else return acc;
}, arr3[0]);
console.log(max);

let min = arr3.reduce((acc , val) => {
    if(val < acc) return val;
    else return acc;
}, arr3[0]);
console.log(min);

let numbersarr = [2, 13, 4, 15, 6];

let maxarr = numbersarr.reduce((acc, curr) => (curr > acc ? curr : acc), numbersarr[0]);
console.log(maxarr);

//find :
let found = numbersarr.find(num => num === 2);
console.log(found);
console.log(numbersarr);

let greaterthen10 = numbersarr.find(num => num > 10);
console.log(greaterthen10);

let obj = [
    {id : 1 , key : 1},
    {id : 2 , key : 2},
    {id : 3 , key : 1}
];

let va = obj.find(function(item){
    return item.key === 1;
});

//some :
let arr5 = [23, 56, 45, 20 , 89 , 90 ];
let marksgreaterthen80 = arr5.some(function(mark){
    return mark > 80;
});
console.log(marksgreaterthen80);


let allmarksgreaterthen80 =  arr5.every(function(mark){
    return mark > 80;
});
console.log(allmarksgreaterthen80);

let numbers = [2, 4, 6, 7];

let hasOdd = numbers.some(num => num % 2 !== 0);

console.log(hasOdd); // true (because 7 is odd)


//every :
let allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // false (because 7 is odd)
//concat :
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let combined = arr6.concat(arr7);
console.log(combined); // [1, 2, 3, 4, 5, 6]

//Destructure in arrays :
let n = [10, 20 , 30 , 40 , 50];
let [first , second , third] = n;
console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30 

//skip values :
let [, , , fourth] =n;
console.log(fourth);  // 40

//default values:
let [a , b , c , d , e , f = 60] = n;


let fruits = ["apple", "banana", "mango", "orange"];

let [f1, f2, ...others] = fruits;

console.log(f1);   // apple
console.log(f2);  // banana
console.log(others);  // ["mango", "orange"]
