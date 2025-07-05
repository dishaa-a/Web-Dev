console.log(document.querySelector(".box")); // Selects the first element with class "box"
console.log(document.querySelector(".box").innerHTML);   // Gets the inner HTML of the first element with class "box"

console.log(document.querySelector(".container"));  // Selects the first element with class "container"
console.log(document.querySelector(".container").innerHTML); // Gets the inner HTML of the first element with class "container"

console.log(document.querySelector(".container").innerText);  // Gets the inner text of the first element with class "container"
console.log(document.querySelector(".box").innerText);  // Gets the inner text of the first element with class "box"

console.log(document.querySelector(".container").outerHTML);  // Gets the outer HTML of the first element with class "container"

console.log(document.querySelector(".container").tagName); // Gets the tag name of the first element with class "container"

console.log(document.querySelector(".container").nodeName); // Gets the node name of the first element with class "container"

console.log(document.querySelector(".container").textContent); // Gets the text content of the first element with class "container"

//console.log(document.querySelector(".container").hidden = true); // Hides the first element with class "container"

console.log(document.querySelector(".box").innerHTML = "hello world"); // Sets the inner HTML of the first element with class "box" to "hello world"    

console.log(document.querySelector(".container").hasAttribute("style")); // Checks if the first element with class "container" has a class attribute
console.log(document.querySelector(".container").getAttribute("style")); // Gets the value of the style attribute of the first element with class "container"
console.log(document.querySelector(".container").setAttribute("style", "color: red;")); // Sets the style attribute of the first element with class "container" to "color: red;"

console.log(document.querySelector(".container").removeAttribute("style")); // Removes the style attribute from the first element with class "container"    

// console.log(designMode= "on"); // Enables design mode for the document, allowing direct editing of the content

// Data attribute 
console.log(document.querySelector(".box").dataset); // Gets all data attributes of the first element with class "box"

// Insertion methods
let div = document.createElement("div");
div.innerHTML = "I am a newly created div";
div.setAttribute("class", "created");
console.log(document.querySelector(".container").append(div)); // Appends the new div to the container

let cont = document.querySelector(".container");
   console.log(cont.insertAdjacentHTML("beforeend", "<div class='created'>I am a newly created div</div>")); // Inserts new div at the end of the container
   
// class list
console.log(document.querySelector(".container").classList); // Gets the class list of the first element with class "box"
console.log(document.querySelector(".container").classList.add("Disha")); // Adds a new class "new-class" to the first element with class "box"
console.log(document.querySelector(".container").classList.remove("Disha")); // Removes the class "new-class" from the first element with class "box"
console.log(document.querySelector(".container").classList.toggle("box")); // Toggles the class "new-class" on the first element with class "box"
console.log(document.querySelector(".container").classList.contains("box")); // Checks if the first element with class "box" contains the class "new-class"