let input = document.querySelector('#search');

function throttle(func , delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            func(...args);
        }
    }
}

input.addEventListener('input', throttle(function(evt){
    console.log('Searching for:', evt.target.value);
}, 1000));
