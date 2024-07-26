// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('321');
const anotherId = Symbol('321')

console.log(id === anotherId)

const bigNumber = 123456789987654321n

// Reference (Non premitive)

// Array, Objects, Functions

const heros = ["ironman", "captain america", "thor"]

let profile ={
    name: "Amit",
    age: 20,
}

const myfunction = function(){
    console.log(("Hello world"));
}

// https://262.ecma-international.org/5.1/#sec-11.4.3