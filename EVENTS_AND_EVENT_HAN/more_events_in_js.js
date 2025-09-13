let mainDiv = document.querySelector("#main");
//mouseover event
mainDiv.addEventListener("mouseover", (e) => {
    mainDiv.style.backgroundColor = "lightblue";
});

//mouseout event
// mainDiv.addEventListener("mouseout", (e) => {
//     mainDiv.style.backgroundColor = "bisque";
// }); 

//mousemove event

// window.addEventListener("mousemove", (e) => {
//     // console.log(e);
//     console.log(e.clientX, e.clientY);
//     mainDiv.style.top = e.clientY + "px";
//     mainDiv.style.left = e.clientX + "px";
// });

//keyup event
window.addEventListener("keyup", (e) => {
    console.log(e);
});

let input = document.querySelector("input");

input.addEventListener("keyup", (e) =>{
    console.log("key released", e.key);
});


//event object
mainDiv.addEventListener("click", (e) =>{
    console.log(e); //gives the event object
});

//event.target
mainDiv.addEventListener("click", (e) =>{
    console.log(e.target); //gives the element on which the event is fired
    console.log(e.target); //gives the element on which the event is fired
    //event type
      
    console.log("event type:", e.type)
});

//prevent default behaviour of events
let form  = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents the default behaviour of the form(submitting and reloading the page)
})