// if -if (checks all if even when above ones are true)
let movieage = 14;
if(movieage >= 18){
console.log("adult so allowed");
}
if(movieage>=13){
    console.log("teen so allowed");
}
else{
    console.log("underage so not allowed");
}

// if-else (checks - if true then execute else execute false)
let score = 36;
if(score>=35){
    console.log("pass");
}
else{
    console.log("fail");
}

// if else-if else (if is true then execute if and terminate , if is false then check else-if linearly according to priority is true then execute and terminate, else-if is false then execute else) 
// eg 1 - 
let marks = 60;
if(marks>=80)
{
    console.log("Grade is A ");
}
else if(marks>=60)
{
    console.log("Grade is B");
}
else if(marks>=35)
{
    console.log("Grade is C");
}
else if (marks<35)
{
    console.log("Fail");
}
else{
    console.log("Student was absent");
}
// eg 2 -
let color = "red";
if(color === "red")
{
    console.log("stop!");
} 
else if(color === "yellow")
{
    console.log("Slow Down!");
}
else if(color === "green")
{
    console.log("Go");
}
else{
    console.log("Traffic light doesn't work");
}
