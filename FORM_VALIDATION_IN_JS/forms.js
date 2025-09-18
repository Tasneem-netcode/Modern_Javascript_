//Js based form validation

let username = document.querySelector("#name");
let email = document.querySelector("#email");
let form  = document.querySelector("form");

// Strict username: only letters, numbers, underscores, min 3 chars
const strictUsernameRe = /^[a-zA-Z0-9_]{3,}$/;
function isValidUsername(username) {
   if (typeof username !== 'string') return false;
   return strictUsernameRe.test(username.trim());
}

// Strict email: only common allowed characters, domain, TLD >= 2
const strictEmailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmailStrict(email) {
   if (typeof email !== 'string') return false;
   return strictEmailRe.test(email.trim());
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let hasError = false;

   // Username validation
   if (!isValidUsername(username.value)) {
      const hideDiv = document.querySelector("#hide");
      const warning = document.querySelector("#username-warning");
      warning.textContent = "Invalid username: only letters, numbers, underscores, min 3 chars.";
      hideDiv.style.display = "block";
      username.scrollIntoView({ behavior: 'smooth', block: 'center' });
      username.focus();
      hasError = true;
   } else {
      document.querySelector("#hide").style.display = "none";
   }

   // Email validation
   if (!isValidEmailStrict(email.value)) {
      const emailHideDiv = document.querySelector("#email-hide");
      const emailWarning = document.querySelector("#email-warning");
      emailWarning.textContent = "Please enter a valid email address.";
      emailHideDiv.style.display = "block";
      email.scrollIntoView({ behavior: 'smooth', block: 'center' });
      email.focus();
      hasError = true;
   } else {
      document.querySelector("#email-hide").style.display = "none";
   }

   if (hasError) return;
   alert("Form submitted successfully");
});