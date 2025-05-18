function nice(name) {
    console.log("Hello " + name);
    console.log("Hello " + name + " You are awesome");
    console.log("Hello " + name + " You are nice");
}

nice("John");
nice("Jane");
nice("Doe");

function sum(a , b) {
    return a + b;
}

result = sum(3,5);

console.log("The sum of these numbers is " + result);

// Arrow function : Can be made usig a variable
const func1 = (x) =>{
    console.log("I am an arrow function ", x);
} 

func1 (6);
func1 (9);