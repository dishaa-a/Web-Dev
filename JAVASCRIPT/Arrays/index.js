// Arrays in js are collection of multiple data types under one name
let arr = [1, 2, 3, 4, 5, "Hello", true, null, undefined];

console.log(arr);
console.log(arr.length);
// Arrays are mutable
console.log(arr[0]); // Accessing first element

//Array can be converted to string
console.log(arr.toString()); // "1,2,3,4,5,Hello,true,,undefined"
// Array methods
console.log(arr.join(" - ")); // "1 - 2 - 3 - 4 - 5 - Hello - true -  - undefined"
// Adding elements to the end of the array
arr.push("New Element");
console.log(arr); // [1, 2, 3, 4, 5, "Hello", true, null, undefined, "New Element"]
// Removing the last element of the array
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5, "Hello", true, null, undefined]
// Adding elements to the beginning of the array
arr.unshift("First Element");       
console.log(arr); // ["First Element", 1, 2, 3, 4, 5, "Hello", true, null, undefined]
// Removing the first element of the array      
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5, "Hello", true, null, undefined]
// Deleting an element at a specific index
delete arr[2]; // Deletes the element at index 2    
console.log(arr); // [1, 2, <empty item>, 4, 5, "Hello", true, null, undefined]      // length remains the same, but the element is removed
// Splicing the array to add or remove elements
arr.splice(2, 1, "Inserted Element"); // At index 2, remove 1 element and insert "Inserted Element"
console.log(arr); // [1, 2, "Inserted Element", 4, 5, "Hello", true, null, undefined]
// Concatenating arrays
let arr2 = [6, 7, 8];   
let concatenatedArray = arr.concat(arr2);
console.log(concatenatedArray); // [1, 2, "Inserted Element", 4, 5, "Hello", true, null, undefined, 6, 7, 8]
// Sorting an array
let numbers = [5, 3, 8, 1, 2];
numbers.sort(); // Sorts the array in ascending order
console.log(numbers); // [1, 2, 3, 5, 8]
// Slicing an array
let slicedArray = numbers.slice(1, 4); // Slices the array from index 1 to index 4 (exclusive)
console.log(slicedArray); // [2, 3, 5]
// Reverse an array
let reversedArray = numbers.reverse(); // Reverses the array
console.log(reversedArray); // [8, 5, 3, 2, 1]

