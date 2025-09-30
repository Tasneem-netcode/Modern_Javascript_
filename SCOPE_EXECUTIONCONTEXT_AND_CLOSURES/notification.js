function createToster(config){
   return function(notification){
      let div = document.createElement('div');
      div.textContent = notification;
      div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}  px-6 py-3 mb-2 rounded shadow-lg pointer-events-none transition-opacity duration-300 ease-in-out`;

      let parentDiv = document.querySelector(".parent");

      parentDiv.classList.add("fixed", "z-50");
    //   parentDiv.classList.remove("items-start");
      
      parentDiv.classList.remove("top-5", "bottom-5" , "left-5", "right-5");
      
      // Apply based on config
      if(config.positionX === "right"){
          parentDiv.classList.add("right-5");
        } else {
            parentDiv.classList.add("left-5");
        }
        
        if(config.positionY === "top"){
         parentDiv.classList.add("top-5");
        } else {
            parent.classList.add("bottom-5");
        }
        
        parentDiv.appendChild(div);

      setTimeout(() =>{
        parentDiv.removeChild(div);
      }, config.duration * 1000);
   };
}

let toaster = createToster({
    positionX: "right",
    positionY: "top",
    duration: 3,
    theme: "dark"
});

toaster("Hello World!");
setTimeout(() => {
    toaster("This is another notification");

} , 2000);
setTimeout(() => {
    toaster("You have a new message");

} , 2000);