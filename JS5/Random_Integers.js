// generate random integers 
// generate integers, 
// multiply by range(10 if want number between 1 to 10, 100 if want between 1 to 100..etc), 
// Math.floor(); // round it off to the lowest single digit value (floor)
// + 1 since previously it generates number from 0 to 9 but +1 does range-change from 1 t 10, similarly for 0-99 to 1-100 if multiplied by 100

// working -
console.log(Math.floor(Math.random() * 10) + 1 ); // * 10 for range 1-10, * 100 for range 1-100, ...

// flow - 
// Math.random() ie range bet 0 to <1
// (* 10) ie range bet 0 to <10
// Math.floor() ie range bet 0 to 9
// + 1 ie range bet 1 to 10

// just for understanding - 
// let number = Math.random(); // 0.467477....
// number = number * 10; // 4.67477....
// Math.floor(number); // 4
// number = number + 1; // 5
// beacuse Math.random() never generates 1, if it doesn't generate 1 then 10 number can never be an outcome since(1*10 = 10) so we always get number in 0 to 9 range
// Thus we do +1 ie if number = 0 te +1 is 1, = 2 then +1 is 3,.....,= 9 then +1 is 10 so range is (1-10)

