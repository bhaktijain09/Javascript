/* syntax-

function funcName()
{
    do something - logic
 } 
funcName();           // calling function

 */

function isAge(){ //function declaration
    // logic -
    let age = 19; 
    if(age>=18){
        console.log("can vote");
    }
    else{
        console.log("cannot vote");
    }
}
isAge(); // function calling // since age = 19 declared so it prints can vote after function calling


function print1to5(){ // function declaration
    // logic -
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5(); // on function calling prints 1 2 3 4 5