let a = prompt("Enter a number")

let b = prompt("Enter second number")

// throw error
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not a integer.")
}

let sum = parseInt(a) + parseInt(b);  // convert string to integer

// Error handling(try catch)

try {
    console.log("The sum is ", sum*x)   // x is not defined
} catch (error) {
    console.log("Error occured")
} finally {
    console.log("FIles are being closed and db connection are being closed.")
}


