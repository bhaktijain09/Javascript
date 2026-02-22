for(i=5; i<=5*10; i=i+5){
    console.log(i);
}

// FOR PRINTING MULTIPLICATION TABLE OF ANY NUMBER
let n = prompt("Enter the number:"); // takes the number from user but for for prompt only string can be taken 
n = parseInt(n); // so we parse/convert it into int using parseInt() and store it in same n variable

for(i=n; i<=n*10; i=i+n){
    console.log(i);
}