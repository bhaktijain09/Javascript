for(let i=1; i<=3; i++){
    console.log(i + "loop starts")
    for(let j=1; j<=3; j++){
        console.log(j + " ie of jth element of for loop");
    }
}
//i=1; i<=3;  yes then go to inside j loop.
//j=1; j<=3; yes prints j then j++, j becomes 2, j=2; j<=3; yes prints j then j++, j becomes 3, j=3; j<=3; yes prints j then j++, j becomes 2, j=4; j<=3; no then the loop breaks and goes to i loop

// prints i=1 for i loop
// j=1
// j=2
// j=3

//i++ so i becomes 2 
// i=2; i<=3;  yes then go to inside j loop.
// same j loop again

// prints i=2 for i loop
// j=1
// j=2
// j=3

//i++ so i becomes 3 
// i=3; i<=3;  yes then go to inside j loop.
// same j loop again

// prints i=3 for i loop
// j=1
// j=2
// j=3

//i++ so i becomes 4 
// i=4; i<=3;  (No, so the i loop breaks)


