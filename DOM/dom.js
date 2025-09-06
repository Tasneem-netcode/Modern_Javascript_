//Fetching in DOM :
let title = document.getElementById("title-of-page");
console.log(title);
title.style.color = "red";
title.textContent = "Updated Title";

let notes = document.getElementsByClassName("note");
console.log(notes);
notes[1].style.backgroundColor = "lightblue";

let firstnote = document.querySelector(".note")//selects only the first note class in html 
console.log(firstnote.textContent); 

let allNotes = document.querySelectorAll(".note");
allNotes.forEach(note => console.log(note.textContent));
console.log(allNotes);

//Manipulating DOM 
//textContent:
let h2 = document.querySelector("#subtitle-of-page");
console.log(h2);
h2.textContent = "Document Object Model is Awesome and Powerful";
console.log(h2);

//innerHTML:
h2.innerHTML = "<span style='color:blue'>Document Object Model</span> is Awesome and Powerful";
h2.innerHTML = "<i>Document Object Model</i> is Awesome and Powerful";


//setAttribute:
// let img = document.querySelector("img");
// img.setAttribute("src" , "https://plus.unsplash.com/premium_photo-1756066699592-eb346b61309b?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

//hover img
const hoverimg = document.querySelector("#hover-img");
hoverimg.addEventListener("mouseover", () => {
    hoverimg.setAttribute("src", "https://plus.unsplash.com/premium_photo-1755711001513-6ac8c817cbc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

});

hoverimg.addEventListener("mouseout" , () => {
    hoverimg.setAttribute("src", "https://plus.unsplash.com/premium_photo-1756066699592-eb346b61309b?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
});

//getattribute:
let img = document.querySelector("img");
console.log(img.getAttribute("src"));

//removeattribute:
// let a = document.querySelector("a");
// a.removeAttribute("href");

//create and remove DOM elements:
let newh3 = document.createElement("h3");
newh3.textContent = "this is new heading 3 created by createElement DOM method";
newh3.className = "new-h3";
newh3.style.color = "blue";

//append the element to the body
document.body.appendChild(newh3);

//append
const div = document.getElementById("container");
const newp = document.createElement("p");
newp.textContent = "this is new paragraph created by createElement DOM method";
div.append(newp , " some more text");

//prepend
// const div = document.getElementById("container");
const newp2 = document.createElement("p");
newp2.textContent= "this is new paragraph 2 created by createElement DOM method an passed to prepend method, so this will be added at the beginning of the div"
div.prepend(newp2);

//remove
const ul = document.querySelector("ul");
const list = document.querySelector("li");
ul.removeChild(list);//removes the first li element from the ul

//to remove all list items:
// const lists = document.querySelectorAll("li");
// lists.forEach(li => li.remove());//removes all li elements

// for(const li of lists){
//     ul.removeChild(li);//removes all li elements from
// }


//or append to any other element
// document.getElementById("some-id").appendChild(newh3);
//prepend the element to the body
// document.body.prepend(newh3);//before the body


//style and classList
let para = document.querySelector("p");
para.textContent = "this is a paragraph created to demonstrate style and classList property of DOM";
para.style.color = "red";
para.style.fontSize = "20px";
para.style.backgroundColor = "lightgrey";
para.style.padding = "10px";
para.style.borderRadius = "5px";
console.log(para.style)

let h3style =  document.querySelector("h3");
h3style.classList.add("headstyle");
// h3style.classList.remove("headstyle");
h3style.classList.toggle("headstyle");//removes the class if already present otherwise adds the class
h3style.classList.toggle("headstyle");
console.log(h3style.classList);