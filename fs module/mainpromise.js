import fs from "fs/promises"

let a = await fs.readFile("disha.txt")

let b = await fs.appendFile("disha.txt", "\n\n\n\nthis is a promise")

console.log(b)
console.log(a.toString())