/* Create a faulty calculator using javascript

This faulty calculator does following:
1. It takes two numbers as input.
2. It performs wrong operations as follows:

+ ----> -
* ----> +
- ----> /
/ ----> *

It performs wrong 10% of the times
*/

let random = Math.random();

let a = prompt("Enter first number");
let b = prompt("Enter second number");  
let c = prompt("Enter operation (+, -, *, /)");

let obj = {
    "+": "-",
    "*": "+", 
    "-": "/",
    "/": "*",
}

if(random > 0.1){
// Perform correct calculation
alert('The result is ${eval(${a} ${c} ${b})}')

}

else{
    // Perform wrong calculation
    c = obj[c];
    alert('The result is ${eval(${a} ${c} ${b})}')
}              