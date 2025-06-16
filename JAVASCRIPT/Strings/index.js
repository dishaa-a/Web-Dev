console.log("Hey! This is a String");
let a = "Disha";
console.log(a);
console.log(a[0]);      // first character of string
console.log(a[1]);
console.log(a[2]);
console.log(a[4]);
console.log(a[5]);
console.log(a.length);  // length of string

// Template Literals

let firstName = "Disha";
let lastName = "Chaudhary";
// console.log("My first name is " + firstName + " and my last name is " + lastName);
// Template literals are enclosed by backticks (``) ${variale} instead of + sign, single or double quotes.
// Double quotes can be used inside backticks
console.log(`My first name is ${firstName} and my last name is ${lastName}`)

  // Escape Sequence Characters: (\) are used to insert a double quote or any other symbol that can be misunderstood betweeen a string
  // for eg: "Roh"an" can be written as "Roh\"an"
  // \n:new line
  // \t:tab space
  // \cr:carriage return
  // not used often

  let b = "Shivam";
  console.log(b.toUpperCase());
  console.log(b.toLowerCase());
  console.log(b.length);
  console.log(b.slice(1,4));       // it will print the string from 1st index to 4th index
  console.log(b.slice(1));        // it will print the string from 1st index to end

  console.log(b.replace("m", "y"));
  console.log(b.concat("Chaudhary", firstName));    // it will add the string at the end

  let c = "  Harry";
  let newName = c.trim();     // it will remove the spaces from the start and end of the string

  // Strings are immutable: once created, they cannot be changed.