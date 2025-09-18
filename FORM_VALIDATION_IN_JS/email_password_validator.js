let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#validator-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();//Prevent form submission to handle validation

    //Clear previous error messages
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";
    document.querySelector("#success-msg").textContent = "";

    //Regex for strict email validation and password complexity
    const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

   let isEmailValid = emailRe.test(email.value);//returns true or false
   let isPasswordValid = passwordRe.test(password.value); //returns true or false

    // Clear previous errors
    if(!isEmailValid){
        email.classList.add("error");
        document.querySelector("#email-error").textContent = "Please enter a valid email address.";
    }
    if(!isPasswordValid){
        password.classList.add("error");
        document.querySelector("#password-error").textContent = "Password must be 6-12 chars, include upper & lower case letters, a number, and a special char.";
    }
    
    //the form is not being submitted if there are errors because e.preventDefault() is called at the start of the submit event listener.
    //Also after the error is set, there is no code to proceed with form submission.
    //To actually submit the form when there are no errors, you would typically check if both isEmailValid and isPasswordValid are true, and then call form.submit() or handle the successful submission accordingly.
    if(!isEmailValid || !isPasswordValid) return; // Stop submission if there are errors

    document.querySelector("#success-msg").textContent = "Form submitted successfully!"; //Else ,  Display success message
});

// Clear error styles on input
email.addEventListener("input", () => {
    email.classList.remove("error");
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#success-msg").textContent = "";
});

password.addEventListener("input", () => {
    password.classList.remove("error");
    document.querySelector("#password-error").textContent = "";
    document.querySelector("#success-msg").textContent = "";
});



// //Add a eye icon to toggle password visibility
// let togglePassword = document.querySelector("#toggle-password");
// togglePassword.addEventListener("mouseover", () => {
//     //make cursor a pointer
//     togglePassword.style.cursor = "pointer";
//     //add one more event listener for click
//     togglePassword.addEventListener("click" , (e) => {
//         if(password.type === "password"){
//             password.type = "text";
//             togglePassword.classList.add("show");
            
//         }
//         else{
//             password.type = "password";
//             togglePassword.classList.remove("show");
//         }
//         // Optionally, you can change the icon here as well

//     });
// });