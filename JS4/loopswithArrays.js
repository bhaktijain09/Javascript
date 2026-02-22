// print all the elements in the array forward and backward
let fruits = ["apple", "banana", "mango", "orange", "litchi"];
for(let i=0; i<=fruits.length-1; i++){
    console.log(i + ". " + fruits[i]); // i no. with fruit name at that index i
}
// prints forward
// 0 apple
// 1 banana
// 2 mango
// 3 orange
// 4 litchi

for(let i=fruits.length-1; i>=0; i--){
    console.log(i + ". " + fruits[i]); // i no. with fruit name at that index i
}
// prints backward
// 4 litchi
// 3 orange
// 2 mango
// 1 banana
// 0 apple