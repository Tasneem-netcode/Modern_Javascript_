//Module pattern:
let bank = (function(){
    let bankBalance = 5000; // private variable
    return {
        getBalance: function(){ // public method
            return bankBalance;
        },
        deposit: function(amount){// public method
            bankBalance += amount;
            return bankBalance;
        },
        withdraw: function(amount){ // public method
            if(amount <= bankBalance){
                bankBalance -= amount;   
                return bankBalance;
            } else {
                return "Insufficient funds";
            }
        }
    }
})();

bank.deposit(1000); // 6000
bank.withdraw(2000); // 4000
console.log(bank.getBalance()); // 4000

//Revealing Module Pattern:
let calculator = (function(){
    let result =0;

    function add(num){
        result += num;
    }
    function subtract(num){
        result -= num;
    }

    function getResult(){
        return result;
    }

    return{
        add: add,
        subtract: subtract,
        getResult: getResult
    };
})();

calculator.add(10);
calculator.subtract(5);
console.log(calculator.getResult()); // 5


//real life example
let shoppingCart = (function(){
    let cart = [];
    function addItem(item){
        cart.push(item);
        console.log(`${item} added to cart`);
    }
    function removeItem(item){
        const index = cart.indexOf(item);
        if(index > -1){
            cart.splice(index, 1); // remove item from cart
            console.log(`${item} removed from cart`);
        } else {
            console.log(`${item} not found in cart`);
        }
    }
    function getItems(){
        return cart;
    }
    function getTotal(){
        return cart.length;
    }
    return {
        addItem: addItem,
        removeItem:removeItem,
        getItems: getItems,
        getTotal: getTotal
    };
})();