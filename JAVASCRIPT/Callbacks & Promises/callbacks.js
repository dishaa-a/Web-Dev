// Callbacks in JavaScript are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. 
// They are commonly used in asynchronous programming, event handling, and functional programming.

// Asynchronus nature of JavaScript allows for non-blocking code execution, meaning that while one task is being processed, other tasks can continue to run.

function sum(a, b){
    console.log(a+b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);

const callback = (arg) => {
    console.log(arg);
}

const loadscript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry")
  document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// This code defines a function `loadscript` that dynamically loads a script from a given source URL and executes a callback function once the script is loaded.
// The `callback` function is called with the argument "Harry" when the script is successfully loaded.

// Callback hell(Nested Callbacks)
// Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain.

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data ", dataId);
        if(getNextData){           // If there is a next data to fetch, call the callback function
            getNextData();    
        }
    }, 2000);
}

// first data1 after 2 seconds
// data2 after 4 seconds
// data3 after 6 seconds


getData(1, () => {
    console.log("Getting data 2...")
    getData(2, () => {
        console.log("Getting data 3...")
        getData(3, () => {
            console.log("Getting data 4...")
            getData(4)
        });
    });
});

const loadscript2 = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src; 
    sc.onload = () => {
        callback("Harry");
    };
    document.head.append(sc);
}
loadscript2("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (name) => {
    console.log(name);
    loadscript2("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (name) => {
        console.log(name);
        loadscript2("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (name) => {
            console.log(name);
        });
    });
});
