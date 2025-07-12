// let obj = {
    // a : 1,
    // b : "Rohan"
// }
// 
// console.log(obj)
// 
// let animal = {
    // eats : true
// } ;
// let rabbit = {
    // jumps: true
// } ;
// 
// rabbit._proto_ = animal;

// Class
class Animal {
    constructor(name){
        this.name = name
        console.log("Object is created")
    }

    eats(){
        console.log("Eating")
    }

    jumps(){
        console.log("Jumping")
    }
}

class Lion extends Animal{

}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera")
console.log(l)