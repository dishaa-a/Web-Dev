const fs = require("fs")

 console.log("Starting")
// fs.writeFileSync("harry.txt", "He is a good boy")    //// used to write a file in synchronus manner


// Callback hell
/* 
fs.writeFile("disha.txt", "He is a good boy", () => {    // used to write a file in asynchronus manner
    console.log("Done")
    fs.readFile("disha.txt", (error, data) => {          // used to read a file
        console.log(error, data.toString())
        // again
        fs.writeFile("disha.txt", "He is a good boy", () => {    // used to write a file in asynchronus manner
            console.log("Done")
            fs.readFile("disha.txt", (error, data) => {          // used to read a file
                console.log(error, data.toString())
                // again
                fs.writeFile("disha.txt", "He is a good boy", () => {    // used to write a file in asynchronus manner
                    console.log("Done")
                    fs.readFile("disha.txt", (error, data) => {          // used to read a file
                        console.log(error, data.toString())
                    })
                })
            })
        })
    })
})
*/

fs.appendFile("disha.txt", "hello", (e, d) => {
    console.log(d.toString())
})

 console.log("Ending")

