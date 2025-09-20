function setDarkOrLight(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}
else{
     document.body.classList.add("light");
    document.body.classList.remove("dark");
 }
}
setDarkOrLight();

document.body.classList.add(localStorage.getItem("theme") || "light");

document.querySelector("#theme-toggle").addEventListener("click",()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        // Save user preference in local storage
        localStorage.setItem("theme", "light");
        
    }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        // Save user preference in local storage
        localStorage.setItem("theme", "dark");
    }
});
// ...existing code...
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (event.matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});
// ...existing code...