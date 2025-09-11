const mass = document.querySelector("#weight");
const height = document.querySelector("#height");
let bttn = document.querySelector("button");

bttn.addEventListener("click", (event) => {
    event.preventDefault(); //stop the form from submitting
    let w = Number(mass.value);
    let h = Number(height.value);
    let bmi = w / (h * h);
    // result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    alert(`Your BMI is ${bmi.toFixed(2)}`);
    console.log("this is a log message");
});
// const message = document.querySelector("#message");