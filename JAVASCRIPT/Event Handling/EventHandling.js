let btn = document.getElementById("btn");

// List of all mouse events
 // https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

//btn.addEventListener("click", ()=>{
//    alert("Button clicked!");
//})          
// This code adds an event listener to a button with the ID "btn". 
// When the button is clicked, it triggers an alert that says "Button clicked!".

btn.addEventListener("click", ()=>{
     document.querySelector(".box").innerHTML = "Yay! You clicked the button!";
})   
// This code adds an event listener to the button with the ID "btn".
// When the button is clicked, it changes the inner HTML of the first element with the class

// keyboard events
btn.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})

// Event Bubbling = It's a way of event propagation in the HTML DOM API where an event starts from the target element and then bubbles up to its parent elements.

document.querySelector(".child").addEventListener("click", ()=>{
    e.stopPropagation(); // Prevents the event from bubbling up to parent elements
     alert("Child was clicked!");   
})

document.querySelector(".childContainer").addEventListener("click", ()=>{
     alert("Child Container was clicked!");   
})

document.querySelector(".Container").addEventListener("click", ()=>{
     alert("container was clicked!");   
})

// set timeout

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);      
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
setInterval(() => {
      document.querySelector(".childContainer").style.background = getRandomColor();
},1000);

// clearInterval(() => {
//     document.querySelector(".childContainer").style.background = "white";
// });
// Cancels the interval that changes the background color of the element with the class "childContainer" every second.

setTimeout(() => {
    document.querySelector(".childContainer").style.background = "white";
}, 5000);

// OR

function hello(){
    console.log("Hello World");
}

setTimeout(hello, 5000);
// This code sets a timeout to execute the `hello` function after 5 seconds, which
// This code sets a timeout to change the background color of the element with the class "childContainer" to white after 5 seconds.
// It will stop the color change after 5 seconds, making the background color white only once.

// clearTimeout(() => {
//     document.querySelector(".childContainer").style.background = "white";
// });
// Cancels the timeout that changes the background color of the element with the class "childContainer" to white after 5 seconds.
// It will stop the color change after 5 seconds, making the background color white only once.
