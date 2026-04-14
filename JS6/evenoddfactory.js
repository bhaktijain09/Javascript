// evenoddfactory standard question type - 

function evenoddfactory(request) {
  if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else if (request == "odd") {
    return function (n) {
      console.log(n % 2 == 1);
    };
  } else {
    console.log("WRONG REQUEST");
    return null;
  }
}
// function evenoddfactory takes request input as number-type is even/odd, and function number n as input
// if "odd" then go to request == "odd", checks the number taken as input is odd then returns true, even then returns false
// if even then go to request == "even",  checks the number taken as input is even then returns true, odd then returns false
// logic - request(even/odd) == n_type(n%2==0 then even, n%2==1 then odd)
request(even) == n%2==0 // prints true else false
request(odd) == n%2==1 // prints true else false

// input is type(even/odd) and number(n)
// evenoddfactory(request)(n); // higher order function
evenoddfactory("even")(2); //true
evenoddfactory("odd")(3); //true

evenoddfactory("even")(1); //false
evenoddfactory("odd")(4); //false
