//Real-world example of Observer Pattern
class YoutubeChannel{
    constructor(){
        this.subscribers= [];
    }
    subscribersCount(user){
        this.subscribers.push(user);
        user.update(`${user.name}, you have successfully subscribed to the channel!`)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`${user.name}, you have successfully unsubscribed from the channel!`)
    }
    notification(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }

}

class User{
    constructor(name){
        this.name = name;
    }
    update(message){
        console.log(`Notification for ${this.name}: ${message}`);
    }
}

let channel = new YoutubeChannel();
let user1 = new User("Alice");
let user2 = new User("Bob");

channel.subscribersCount(user1);
// channel.subscribersCount(user2);

channel.notification("New video uploaded!");



class Subject{
    constructor(){
        this.observers = [];
    }
    subscribe(observer){
        this.observers.push(observer);
    }
    unsubscribe(observer){
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notify(message){
        this.observers.forEach((obs) => obs.update(message));
    }
}
const newsChannel = new Subject();

function u1(news){
    console.log(`User1 received news: ${news}`)
}
function u2(news){
    console.log(`User2 received news: ${news}`)
}
newsChannel.subscribe({update: u1});
newsChannel.subscribe({update: u2});

newsChannel.notify("Breaking News: New Observer Pattern Implemented!");
