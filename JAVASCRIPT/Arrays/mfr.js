// Map, Filter, Reduce

//let arr = [ 1, 13, 5, 7, 11];
//let newArr = [];
//for(let index = 0; index < arr.length; index++){
//    const element = arr[index];
//    newArr.push(element**2);

// }

// Using map to create a new array with squared values
let newArr = arr.map((e) => {
    return e ** 2;
})
console.log(newArr); // [1, 169, 25, 49, 121]

// Using filter to create a new array with even values
const greaterThanFive = arr.filter = (e) => {
    if (e > 5) {
    return true; 
    }
    return false;
}
console.log(greaterThanFive); // [13, 7, 11]

// Using reduce to sum all elements in the array
const red = (a, b)=> {
    return a*b;
}
console.log(arr.reduce(red)); // 5005

// Array from method to create an array from a string
let str = "Hello World";
let arrFromStr = Array.from(str);
console.log(arrFromStr); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
