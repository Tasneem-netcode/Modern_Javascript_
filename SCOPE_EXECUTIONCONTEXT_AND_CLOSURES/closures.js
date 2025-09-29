//Closures
function outerFunction(){
    let count = 0 ; // count is a private variable
    function innerFunction(){
        count++;
        console.log(`Count is : ${count}`);
    }
    return innerFunction; // Return the inner function from outerFunction to create a closure
}

// let counter = outerFunction(); // Call outerFunction to get the innerFunction
// counter(); // Call the innerFunction to see the count
// counter(); // Call again to see the count increment
// counter(); // Call again to see the count increment
// counter(); // Call again to see the count increment

outerFunction()(); // Call outerFunction but do not store the returned function

let anotherCounter = outerFunction(); // Create a new closure
anotherCounter(); // This will have its own count variable
anotherCounter(); // Increment its own count variable
anotherCounter(); // Increment its own count variable


//real Life Example OF Closure
function createCart(){
    let cart = []; // Private variable to hold cart items

    function addToCart(item){
        cart.push(item);
        console.log(`${item} added to cart. Current cart:`, cart);
    }
    function viewCart(){
        console.log("Current cart items:", cart);
    }
    return { addToCart , viewCart}; // Return an object with methods to interact with the cart
}

const myCart = createCart(); // Create a new cart instance
myCart.addToCart("Moisturizer"); // Add item to cart
myCart.addToCart("Sunscreen"); // Add another item to cart
myCart.viewCart(); // View current cart items


//Encapsulation using Closure
function clickLimiter(maxClicks){
    let clickCount =0 ;

    return function(){
        if(clickCount < maxClicks){
            clickCount++;
            console.log(`Button clicked ${clickCount} times`);
        } else {
            console.error("Max click limit reached");
        }
    }
}

const limitedClick = clickLimiter(3); // Limit to 3 clicks
limitedClick(); // 1
limitedClick(); // 2
limitedClick(); // 3
limitedClick(); // Error: Max click limit reached