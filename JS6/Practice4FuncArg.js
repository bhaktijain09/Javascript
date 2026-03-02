// create a function to print multiplication table of a number
function table(n) {
  for (let i = 1; i <= 10; i++) { //i=1,2,3,4,5,6,7,8,9,10 where n is the number of which you want table.
    console.log(n * i); // 1*2, 2*2, 3*2, 4*2, 5*2,.... i changes, n is fixed
  }
}
table(4);

// or 

function table(num) {
  for (let i = num; i <= num*10; i+=num) {
    console.log(i);
  }
}
table(7);
//eg - for table of 2 - 
//starting with i=n=2; i<=2*10=20; i=i+n = 2+2 = 4 then +2= 6 then and so on ...
