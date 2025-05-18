//To link js file to html we use <script src="variables.js"></script> in body tag

//VARIABLES

   //Variable is a container that contains a value 
  
   //1. var variable
   var a=5;
   var b=6;
   var c="Disha"

   console.log(a+b)

   //To know the datatype of a variable we use type of
   console.log(typeof a, typeof b, typeof c)

   //2. const variable
   //const a1=6;         the value of const cannot be reassigned once it is assigned
   // a1=a1+1;            this is not allowed


   //3. let variable: it is thr most recommended variable
   let d=5;
   let e=6;
   let f="Disha"

   console.log(e)

   //var vs let and const: var is globally scoped while let and const are block scoped

//DATA TYPES

   //1. Primitive data type: There are 7 Primitive datatypes in js
   // .Null    .Number    .String     .Symbol    .Undefined(Variable having no value is undefined)      .Boollean      .Big Int

   let x = "Hello Disha";                       //string
   let y = 21;                                  //number
   let z = 3.55;                                //number
   const p = true;                             //boolean
   let q = undefined;                          //undefined
   let r = null;                               //null

   console.log(x, y, z, p, q, r)
   console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

   //object in js: It has a key and its value
   //"key" : "value"

   let o = {
    "name": "Disha",
    "job code": 5600
   }

   console.log(o)

   //To add a key
   o.salary = "100 crores"
   console.log(o)
   
    //To alter a value
    o.salary = "500 crores"
   console.log(o)