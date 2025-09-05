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