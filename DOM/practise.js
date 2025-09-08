// Create a <h1> element with text "Hello DOM" and add it to the body.
let h1 = document.createElement("h1");
h1.textContent= "Hello DOM";
document.body.append(h1);

// Change the text of the <h1> to "DOM Practice Started 🚀" using textContent.
h1.textContent = "DOM Practice Started 🚀";
h1.style.color = "grey";
h1.style.textAlign = "center";
h1.style.backgroundColor = "moccasin"; 

//Create a <p> with some text, style it (color = blue, font-size = 18px, background = lightyellow).
let para = document.createElement("p");
para.textContent = "DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can interact with the page.";
para.style.color = "purple";
para.style.fontSize = "20px";
para.style.backgroundColor = "lightyellow";
document.body.append(para);

let image = document.createElement("img");
image.setAttribute("src", "imgshall.jpg");
document.body.append(image);
image.style.width = "300px";
image.style.height = "200px";
image.style.borderRadius = "10px";
image.style.display = "block";
image.style.margin = "10px auto";

//Add a button "Click Me" that when clicked, changes the <p> text to "Button Clicked!".
let button = document.createElement("button");
button.textContent = "click me";
document.body.append(button);
button.style.color = "white";
button.style.backgroundColor = "blue";
button.style.border = "none";
button.style.padding = "10px 20px";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.display = "block";
button.style.margin = "10px auto";

button.addEventListener("click", function() {
    para.textContent = "Button Clicked!";
    para.style.color = "green";
    para.style.fontWeight = "bold";
    para.style.backgroundColor = "lightgrey";
    para.style.padding = "10px";
    para.style.borderRadius = "5px";
});

//Use classList to add a CSS class to your <p> that gives it bold text and a border.
let paraClass = document.querySelector("p");
console.dir(paraClass);
paraClass.classList.add("paragraph-class");
//make the para to apperar after the button
document.body.insertBefore(paraClass, button);

//Create an unordered list (<ul>) with three items (<li>). Add them dynamically using JS.
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "Item 1";
let li2 = document.createElement("li");
li2.textContent = "Item 2";
let li3 = document.createElement("li");
li3.textContent = "Item 3";
ul.append(li1, li2, li3);
document.body.appendChild(ul);

//Remove the second item from the list using removeChild().
ul.removeChild(li2);

//Add one more item "New Item" at the beginning of the list using prepend().
let newli = document.createElement("li");
newli.textContent = "New Item";
ul.prepend(newli);

let alllist = document.querySelectorAll("li");
alllist.forEach(li => li.style.color = "brown");
alllist.forEach(li => li.textContent = "These list items are styled using forEach method");

//Use createElement and append to add a <div> with some text and a title attribute to the body.
//when we hover on the div content the title attribute will be shown as a tooltip
let div = document.createElement("div");
div.textContent = "This is a div created to demonstrate createElement and append method of DOM";
div.setAttribute("title", "some info");
document.body.append(div);

let btn = document.querySelector("button");
btn.removeAttribute("disabled");//removes the disabled attribute from the button
// make this btn apperar after div
// document.body.insertBefore(btn, div.nextSibling);

let divarea = document.querySelector("div");
divarea.insertBefore(btn, divarea.nextSibling);

//Add a highlight class to every even item in a list
alllist.forEach((li , index) => {
    if(index % 2 === 0){
        li.classList.add("highlight");
    }
});