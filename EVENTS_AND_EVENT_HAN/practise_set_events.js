let inp = document.querySelector("input");
let charCount = document.querySelector("#charCount");

inp.addEventListener("input", (e) => {
    // console.log(inp.value);             //current value of input field
    console.log(inp.value.length);    //length of the current value of input field
    charCount.textContent = inp.value.length;  //updating the character count in the span
    //to keep a limit on the number of characters
    let leftchar = 20 - inp.value.length; //at one point this value will be negative
    if(leftchar < 0){
        charCount.textContent = leftchar;
        charCount.style.color = "Red";
    }
    else{
        charCount.textContent = leftchar;
        charCount.style.color = "#d4a097"; //default color
    }
});