let form  = document.querySelector('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch("url", {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        }),
    })
})