function debounce(func, delay){
    let timer;
    return function(...args){ // Return a new function that wraps the original function
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args); // Call the original function with the provided arguments
        }, delay);
    }
}

let input = document.querySelector('#search');
input.addEventListener('input', debounce(function(evt){
    console.log('Searching for:', evt.target.value);

}, 1000));