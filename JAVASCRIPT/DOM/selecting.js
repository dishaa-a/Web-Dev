console.log("Selecting by class name");

let hw = document.getElementsByClassName("box");
console.log(hw);

hw[2].style.backgroundColor = "red";  // Change the background color of the third element with class "box"

console.log("Selecting by Id");

document.getElementById("red").style.backgroundColor = "blue"; // This line is incorrect; it should be an element, not a method

document.querySelector(".box"); // Selects the first element with class "box"
console.log(document.querySelector(".box"));
document.querySelectorAll(".box"); // Selects all elements with class "box"
console.log(document.querySelectorAll(".box"));

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor = "yellow"; // Change the background color of all elements with class "box"
});              // query selector all cannot be used to change the style of all elements at once, so we use forEach

// Get element by tag name
document.getElementsByTagName("div");

// Get element by class name
document.getElementsByClassName("box");

// Matches, closest and contains methods
// element.matches(".box"); // Checks if the element matches the selector
// element.closest(".box"); // Finds the closest ancestor that matches the selector     
// element.contains(".box"); // Checks if the element contains another element with the specified selector


console.log(hw[1].matches("#red")); // Checks if the fifth element matches the selector ".box"
console.log(hw[4].closest(".box")); // Finds the closest ancestor of the fifth element that matches the selector ".box" 
console.log(hw[4].contains(document.querySelector(".box"))); // Checks if the fifth element contains the first element with class "box"