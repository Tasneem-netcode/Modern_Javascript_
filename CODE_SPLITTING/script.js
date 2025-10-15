const btn = document.querySelector('#loadBtn');

btn.addEventListener('click', async function(){
    let heavy = await import("./heavy.js");
    heavy.veryHeavy();
})
