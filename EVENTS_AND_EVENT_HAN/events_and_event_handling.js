//how to create and handle events in JavaScript
// alert("this is an alert box");
// console.log("this is a log message");
let btn = document.querySelector("button");
// function clickhandler(e){
//     console.log("button clicked", e);
//     e.target.style.backgroundColor = "blue";
//     e.target.style.color = "white";
//     e.target.style.padding = "10px 20px";
//     e.target.style.border = "none";
//     e.target.style.borderRadius = "5px";
//     e.target.style.cursor = "pointer";
// }
// btn.addEventListener("click", clickhandler);

btn.style.backgroundColor = "black";
btn.style.color = "white";
btn.style.padding = "10px 20px";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.fontSize = "16px";
btn.style.margin = "10px";
btn.style.display = "block";
btn.style.margin = "auto";

btn.addEventListener("click", () => {
    message.style.display = "block";

    for(let i =0; i<30;i++){
        const spark = document.createElement("div");
        spark.textContent = "✨";
        spark.style.position = "fixed";
        spark.style.left = Math.random() * window.innerWidth + "px";
        // spark.style.top = Math.random() * window.innerHeight + "px";
        spark.style.top = "-20px";
        spark.style.fontSize = Math.random() * 24 + 12 + "px";
        spark.style.opacity = "1";
        spark.style.transition = "all 1s ease-out";
        document.body.appendChild(spark);
        
        let topPos =  -20;
        const speed = Math.random() * 3 +2 ;

        const fall = setInterval(() => {
            topPos += speed;
            spark.style.top = topPos + "px";

            if(topPos > window.innerHeight){
                clearInterval(fall);
                spark.remove();
            }
        }, 30);
        // setTimeout(() => {
        //     spark.style.transition = "all 1s ease-out";
        //     spark.style.opacity = "0";
        //     setTimeout(() => {
        //         document.body.removeChild(spark);
        //     }, 1000);
        // }, Math.random() * 1000);
    }
});

let p = document.querySelector("p");
p.addEventListener("dblclick" , () => {
    p.style.color = "lightblue";
})