let a = 10 ;
let b = a ;
console.log(a); // This will log 10
console.log(b); // This will also log 10
a = 20; // Reassigning a to 20
console.log(a); // This will log 20
console.log(b); // This will still log 10, as b is a copy of the original value of a


let arr = [1 , 2, 3];
let arrCopy = arr; // Copying the reference of the array

console.log(arr); // This will log [1, 2, 3]
console.log(arrCopy); // This will also log [1, 2, 3]

arr[0] = 10; // Modifying the first element of the original array
console.log(arr); // This will log [10, 2, 3]
console.log(arrCopy); // This will also log [10, 2, 3], as arrCopy is a reference to the same array