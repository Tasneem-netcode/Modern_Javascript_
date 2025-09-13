//how to create and handle events in JavaScript
// alert("this is an alert box");
// console.log("this is a log message");
// let btn = document.querySelector("button");
// // function clickhandler(e){
// //     console.log("button clicked", e);
// //     e.target.style.backgroundColor = "blue";
// //     e.target.style.color = "white";
// //     e.target.style.padding = "10px 20px";
// //     e.target.style.border = "none";
// //     e.target.style.borderRadius = "5px";
// //     e.target.style.cursor = "pointer";
// // }
// // btn.addEventListener("click", clickhandler);

// btn.style.backgroundColor = "black";
// btn.style.color = "white";
// btn.style.padding = "10px 20px";
// btn.style.border = "none";
// btn.style.borderRadius = "5px";
// btn.style.cursor = "pointer";
// btn.style.fontSize = "16px";
// btn.style.margin = "10px";
// btn.style.display = "block";
// btn.style.margin = "auto";

// btn.addEventListener("click", () => {
//     message.style.display = "block";

//     for(let i =0; i<30;i++){
//         const spark = document.createElement("div");
//         spark.textContent = "✨";
//         spark.style.position = "fixed";
//         spark.style.left = Math.random() * window.innerWidth + "px";
//         // spark.style.top = Math.random() * window.innerHeight + "px";
//         spark.style.top = "-20px";
//         spark.style.fontSize = Math.random() * 24 + 12 + "px";
//         spark.style.opacity = "1";
//         spark.style.transition = "all 1s ease-out";
//         document.body.appendChild(spark);
        
//         let topPos =  -20;
//         const speed = Math.random() * 3 +2 ;

//         const fall = setInterval(() => {
//             topPos += speed;
//             spark.style.top = topPos + "px";

//             if(topPos > window.innerHeight){
//                 clearInterval(fall);
//                 spark.remove();
//             }
//         }, 30);
//         // setTimeout(() => {
//         //     spark.style.transition = "all 1s ease-out";
//         //     spark.style.opacity = "0";
//         //     setTimeout(() => {
//         //         document.body.removeChild(spark);
//         //     }, 1000);
//         // }, Math.random() * 1000);
//     }
// });

// let p = document.querySelector("p");
// p.addEventListener("dblclick" , () => {
//     p.style.color = "lightblue";
// });

// function clickMe() {
//     alert("Button clicked!");
// }

// let bttn = document.querySelector(".BuyNow");
// bttn.style.backgroundColor = "pink";
// bttn.style.color = "Black";
// bttn.style.padding = "10px 20px";
// bttn.style.border = "none";
// bttn.style.borderRadius = "5px";
// bttn.style.cursor = "pointer";
// bttn.style.fontSize = "16px";
// bttn.style.margin = "10px";
// bttn.style.display = "block";
// bttn.style.margin = "auto";

// bttn.addEventListener("mouseenter", () => {
//     bttn.textContent = "Happy Shopping!";
//     bttn.style.backgroundColor = "lightgreen";
// });

// bttn.addEventListener("mouseleave", (e) => {  
//     bttn.textContent = "Buy Now";
//     bttn.style.backgroundColor = "pink";
// });

// // bttn.removeEventListener("mouseleave", () => {
// //     bttn.textContent = "Buy Now";
// //     bttn.style.backgroundColor = "pink";
// // });

// //common js events:
// //click:When an element is clicked 
// //dblclick:When an element is double clicked
// //mouseover:When the mouse pointer is moved onto an element
// let para= document.querySelector("#paragraph");
// para.addEventListener("mouseover", () => {
//     para.style.backgroundColor = "lightgrey";
// });

// para.addEventListener("mouseout", () => {
//     para.style.backgroundColor = "white";
// });
// //mouseout:When the mouse pointer is moved out of an element
// //mousedown:When a mouse button is pressed down on an element
// para.addEventListener("mousedown", () => {
//     para.style.color = "red";
// });

// //keyboard events:
// //keydown:When a keyboard key is pressed down
// // document.addEventListener("keydown", (e) => {
// //     console.log("key pressed on keyboard", e.key);
// // });

// // //keyup:When a keyboard key is released
// // document.addEventListener("keydown", (e) => {
// //     console.log("key released on keyboard", e.key);
// // });


// let ipt = document.querySelector("input");
// ipt.addEventListener("input", (e) => {
//     // console.log("Typed character:", e.data);
//     console.log("Current input value:", e.target.value);
//     if(e.data !== null) { //here e is an object and data is a object field which tells which key is pressed
//         console.log("Typed character:", e.data);
//     }
// });  

// //change:When the value of an element is changed and the element loses focus
// let select = document.querySelector("select");
// let dev = document.querySelector("#Devices");


// select.addEventListener("change", (e) => {
//     console.log(e);
//     console.log(e.target.value);
//     dev.textContent = `You selected ${e.target.value}`;
// });

// //eventlistener on the title heading 
// //we want any key that is pressed to be reflected in the screen heading
// // use window object to add event listener

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown",(e) => {
//     console.log(e.key);
//     h1.textContent = e.key;
//     if(e.key === "shift" || e.key === "CapsLock"){
//         //dont show the heading text to shift or capslock
//         // h1.textContent =" ";
//         e.key = " ";
//     }
// });

// let btnforupload = document.querySelector("#btn_to_upload");
// let input = document.querySelector("#file_input");

// btnforupload.addEventListener("click", () =>{
//     input.click();
// });

// input.addEventListener("change", () => {
//     console.log(input.files[0]); // logs the first selected file
//     alert(`You selected: ${input.files[0].name}`);
// });

// input.addEventListener("change", (e) =>{
//     console.log(e.target.files);
//     console.log("you selected " , e.target.files[0].name);
//     const file = e.target.files[0];
//     if(file){
//         btnforupload.textContent = file.name;

//     }
// });

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //to prevent the default behaviour of form submission
    console.log("Form submitted"); 

    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    console.log(inputs[3].files[0]); 

    let card = document.createElement("div");
    card.classList.add("card");
    
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    // img.setAttribute("src","https://plus.unsplash.com/premium_photo-1757637871816-221a63ff7f3c?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" );

    img.setAttribute("src", URL.createObjectURL(inputs[3].files[0]));//creates a temporary URL pointing to the file object
    img.setAttribute("alt", "profile pic");

    console.log(img);
    
    let email = document.createElement("h5");
    email.textContent = inputs[2].value;

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;
    
    let h5 = document.createElement("h5");
    h5.textContent = "Web Developer";
    
    
    let p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum. Adipisci, expedita!";
    
    h5.appendChild(email);
    profile.appendChild(img);
    card.appendChild(profile); 

    card.appendChild(email);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);
if(inputs.type !== "submit"){
    inputs.forEach(input => input.value = "");

}
    // document.body.appendChild( card);
    });

