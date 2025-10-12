function CreateProduct(name, price){
    let stock =10;
    return{
        name,
        price,
        CheckStock(){
           console.log(`Stock for ${name}: ${stock}`);
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`Purchased ${qty} pieces of ${name} , remaining stock: ${stock}`);
            }else{
                console.log(`Insufficient stock for ${name}`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`Refilled ${qty} pieces of ${name}, new stock: ${stock}`);
        }
    };
} 

let product1 = CreateProduct("Laptop", 10000);
product1.CheckStock(); // Stock for Laptop: 10
product1.buy(2); // Purchased 2 pieces of Laptop , remaining stock: 8
let product2 = CreateProduct("Phone", 50000);
product2.CheckStock(); // Stock for Phone: 10
product2.buy(5); // Purchased 5 pieces of Phone , remaining stock: 5
product1.CheckStock(); // Stock for Laptop: 8