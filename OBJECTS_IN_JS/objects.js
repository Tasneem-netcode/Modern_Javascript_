let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

//access properties
obj.name;
obj.age;

//another way to access properties
obj["city"];

let a = "name";
let b = "age";
let c = "city";

console.log(obj[a]);
console.log(obj[b]);
console.log(obj[c]);

//nested list:
let student ={
    name: "alice",
    age:20,
    marks :{
        science : 90,
        math:60
    },
    location:{
        city: "New York",
        pin: 10001,
        country:{
            countryname: "USA",
            code: "us"
        }
    }

};

//deep access
student.marks.science;
student.location.city;
student.location.country.countryname;
//object destructuring
let {science , math} = student.marks;
let {countryname , code} = student.location.country;


//iterate in objects:
let object = {
    name: "harry",
    age : 25,
    email: "harry@example.com"
}
// for..in
for (let key in object){
    console.log(key);
    console.log(object[key]);
    console.log(key , ":" , object[key]);
}

//object.keys()
let keys = Object.keys(object);
console.log(keys);

//object.values()
let values = Object.values(object);
console.log(values);

//object.entries()
let entries = Object.entries(object);
console.log(entries);

//spread operator
let newObject = {...object};
// let newObject = {price: Infinity, ...object};
console.log(newObject);

//deep copy
let deepcopy = JSON.parse(JSON.stringify(student)); 

//optional chaining:
console.log(student?.location?.country?.nameocountry);//returns undefined if property doesn't exist

//computed property names
let key = "email";
let user = {
    name : "jack",
    age :40,
    [key]: "jack@example.com"
};
console.log(user);
console.log(user[key]);//to access computed property


//object keys can be number and boolean also:
const obj2 ={
    true : "yes",
    41 : "answer",
};
console.log(obj2[41]);
console.log(obj2[true]);

//destructure the key "first-name" as variable called firstName
const user2 = {
    "first-name" : "Harsh",
};
let {"first-name" : firstName}=user2;
console.log(firstName);//now we can access firstName with the variable firstName

const course = {
    title : "Javascript",
    duration : "3 weeks",
    topics : ["variables", "functions", "objects"]
};

for(let key in course){
    console.log(key);
    console.log(course[key]);
}