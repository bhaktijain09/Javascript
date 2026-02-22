// print each element of eah array of the shop array using for loop
let shop = [["earrings", "nosepin", "ring"], ["lipstick", "kajal", "eyeliner"], ["top", "pant", "belt"]];
for(let i=0; i<=shop.length-1; i++){
    console.log("ith array is " + i + " = " + shop[i]); 
    // ith array is [[array0], [array1], [array2]]
    for(j=0; j<=shop[i].length-1; j++){
           console.log("jth element in ith array is " + "= " + shop[i][j]);
           // jth array is [[0,1,2 of array 0], [0,1,2 of array 1], [0,1,2 of array 2]]
    }
}
// To understand - 
// shop[i] = ["earrings", "nosepin", "ring"] // array 0
// shop[j] = ["lipstick", "kajal", "eyeliner"] // array 1
// shop[k] = ["top", "pant", "belt"] // array 2

// shop[i][i] = ["earrings"] // array 0 of 0
// shop[i][j] = ["nosepin"]  // array 1 of 0
// shop[i][k] = ["ring"] // array 2 of 0

// shop[j][i] = ["lipstick"] // array 0 of 1
// shop[j][j] = ["kajal"] // array 1 of 1
// shop[j][k] = ["eyeliner"] // array 2 of 1

// shop[k][i] = ["top"] // array 0 of 2
// shop[k][j] = ["pant"] // array 1 of 2
// shop[k][k] = ["belt"] // array 2 of 2
