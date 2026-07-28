let nums1 = [1,2,3,4,5,6,7,8,9,912527];

//Since you did not provide an initial value like max=0 orInteger.MIN_VALUE as we do in java, 
//reduce() automatically uses: max = first element = 1

let result9 = nums1.reduce((max, element) => {

if(element>max){     
return element;
}
else{
    return max;
}

});

console.log(result9);