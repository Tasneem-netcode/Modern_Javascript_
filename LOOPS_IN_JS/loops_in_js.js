//loops 
//for loop
for(let i = 1 ; i<=5;i++){
    console.log("Numbers:" + i);
}


//while:
let i = 1;
while (i<=5){
    console.log("Number:" +i);
    i++;
}

// //do....while loop:
let j =6 ;
do{
    console.log("Number:" +j);
    j++;
}while(j<=5);


//foreach:
let lang = ["python" , "javascrit", "cpp"];
lang.forEach(function(languages, index){
    console.log(index+":"+languages);
});