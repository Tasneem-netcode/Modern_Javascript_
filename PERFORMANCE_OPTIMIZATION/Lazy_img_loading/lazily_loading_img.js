let imgs = document.querySelectorAll('img.lazy');
console.log("js file loaded");

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(img);
        }
    });
}, {
    root : null, // viewport is screen
    threshold: 0.1, // 10% of the image is visible
}
);

imgs.forEach(img => {
    observer.observe(img);
})