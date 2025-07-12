// async fumctiion always returns a promise
// await pauses the execution of the function until the promise is settled
// If the promise is resolved, it returns the value
// If the promise is rejected, it throws an error

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
        resolve("200");
        }, 2000);
    });
}

async function getWeather() {
    await api();   // 1st call
    await api();   // 2nd call
}

function getData(dataId){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        console.log("data ", dataId);
        resolve("success");
    }, 2000);
 });
}

// Async-Await
async function getAllData() {
    console.log("Getting data 1....");
    await getData(1);
     console.log("Getting data 2....");
    await getData(2);
     console.log("Getting data 3....");
    await getData(3);
     console.log("Getting data 4....");
    await getData(4);
}

// IIFE = Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined
// It is a function without name
// (function)()
// it can be a normal function, an arrow function, or an async function

// (async function() {
//    .....
//  })();

(async function () {
    console.log("Getting data 1....");
    await getData(1);
     console.log("Getting data 2....");
    await getData(2);
     console.log("Getting data 3....");
    await getData(3);
     console.log("Getting data 4....");
    await getData(4);
})();


/* Comparison of async await with promise chaining and callback hell 

1. Callback hell :
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

2. Promise chaining :
console.log("getting data 1....");
 getData(1)
    .then((res) => {
      console.log("getting data 2....");
      return getData(2); 
    })
    .then((res) => {
        console.log("getting data 3....");
        return getData(3);
    })
    .then((res) => {    
        console.log(res);
});   

3. Async await :
async function getAllData() {
    console.log("Getting data 1....");
    await getData(1);
     console.log("Getting data 2....");
    await getData(2);
     console.log("Getting data 3....");
    await getData(3);
     console.log("Getting data 4....");
    await getData(4);
}
*/