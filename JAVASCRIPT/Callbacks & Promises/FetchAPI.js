// API works on request - response object model
// Fetch API is used to make HTTP requests in JavaScript
// It returns a Promise that resolves to the Response object representing the response to the request
// API stands for Application Programming Interface
// the fetch() method is used to make a request to a server and returns a Promise that resolves to the Response object
// let promise = fetch(URL, [options]);

const URL = "https://official-joke-api.appspot.com/random_joke";
const jokePara = document.querySelector("#joke");
const btn = document.querySelector("#button");
// The URL is the endpoint of the API we are calling
const getData = async () => {
    console.log("Getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(response);
    jokePara.innerText = data[0].text;
}

btn.addEventListener("click",getData);

// AJAX is asynchronous JavaScript and XML
// It is a technique for creating asynchronous web applications

// JSON
// JSON stands for JavaScript Object Notation
// It is a lightweight data interchange format that is easy to read and write   

// json() method : returns a Promise that resolves to the result of parsing the body text as JSON
// input is JSON string output is JavaScript object

