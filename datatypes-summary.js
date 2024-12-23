// Primitive (call by value)
// 7 types : string, number, boolean, null, undefined, symbol(used to make unique the value), bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(anotherId == id);

const bigNumber = 12345678979561265426


// Non primitive (reference type)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj= {
    name: "Anshu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3