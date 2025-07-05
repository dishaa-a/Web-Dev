// PROMISES 
// Promises are a way to handle asynchronous operations in JavaScript. 
// They represent a value that may be available now, or in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// It will either be resolve or reject.
// Promises are the solution to callback hell, allowing for cleaner and more manageable code.
// Promises are promised to return a value in the future, and they can be chained together using `.then()` and `.catch()` methods.

let prom1 = new Promise((resolve, reject) => {

    // Rejecting the promise if a condition is met
    let a = Math.random();
    if (a < 0.5){
        reject("Error: Random number is less than 0.5")
    } else {

    // Resolving the promise after a timeout
    setTimeout(() => {
        console.log("Promise 1 resolved")
        resolve("Disha")
    }, 3000); 
}
})


prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err);
})

// Catching errors if the promise is rejected

// Promise Chaining
/* let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 resolved")
        resolve("Disha 2")
    }, 2000);
})          
.prom1.then((a) => {
    console.log(a)
    return prom2;
}).then((b) => {
    console.log(b);
}).catch((err) => {
    console.log(err);
});  */

// promise.all(promise) = // It is used to run multiple promises in parallel and wait for all of them to resolve or reject.
// It returns a single promise that resolves when all of the promises in the iterable have resolved or
let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5){
        reject("Error: Random number is less than 0.5")
    } else {
    setTimeout(() => {
        console.log("Promise 2 resolved")
        resolve("Disha 2")
    }, 1000);
}
})

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);
})

// promise.allsettled(promise) = It will wait for all the promises to settle (either resolved or rejected) and return an array of objects with the status and value/reason of each promise.
// It is useful when you want to know the outcome of all promises, regardless of whether they
let p4 = Promise.allsettled([prom1, prom2])
p4.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);
})

// Promise.race(promise) = It will return a single promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
// It is useful when you want to get the result of the first promise that settles.
let p5 = Promise.race([prom1, prom2])
p5.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);
})

//Promise.any(promise) = It will return a single promise that resolves as soon as one of the promises in the iterable fulfills, or rejects if no promises fulfill.
let p6 = Promise.any([prom1, prom2])        
p6.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);
})

// Promise.resolve(value) = It returns a promise that is resolved with the given value.
let p7 = Promise.resolve("Resolved Value") 
p7.then((a) => {
    console.log(a)
}   ).catch(err => {
    console.log(err);
}) 

// Promise.reject(reason) = It returns a promise that is rejected with the given reason.
let p8 = Promise.reject("Rejected Reason")
p8.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);
})

// Promise.finally() = It is used to execute a callback function when the promise is settled, regardless of whether it was fulfilled or rejected.
// It is useful for cleanup actions or logging.
let p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 9 resolved")
        resolve("Disha 9")
    }, 2000);
})
p9.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("Promise 9 settled")
})
// The `finally` method is called after the promise is settled, regardless of whether it was fulfilled or rejected.
