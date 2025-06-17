console.log("Hello, World!");
console.log(document.body);
console.log(document.body.childNodes);            // NodeList of child nodes
console.log(document.body.childNodes[0]);         // First child node
console.log(document.body.childNodes[1].childNodes); // Child nodes of the second child node
console.log(document.body.lastChild);   // Last child node

console.log(document.body.firstChild);  // First child node
console.log(document.body.lastElementChild); // Last child element  
console.log(document.body.firstElementChild); // First child element

console.log(document.body.firstElementChild.children); // HTMLCollection of child elements
console.log(document.body.firstElementChild.children[0]); // First child element of the first child element
console.log(document.body.firstElementChild.children[1]);
console.log(document.body.firstElementChild.children[2]);
console.log(document.body.firstElementChild.children[3]);
console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[3].parentElement); // Parent element of the fourth child element   

console.log(cont.firstChild);         // First child of the element with id 'cont'
console.log(cont.lastChild);          // Last child of the element with id 'cont'
console.log(cont.firstElementChild); // First child element of the element with id 'cont'
console.log(cont.lastElementChild);  // Last child element of the element with id 'cont'    
cont.lastElementChild.style.color = "red"; // Change color of the last child element to red
cont.lastElementChild.style.backgroundColor = "yellow"; // Change background color of the last child element to yellow
console.log(cont.lastElementChild.parentElement); // Parent element of the last child element
