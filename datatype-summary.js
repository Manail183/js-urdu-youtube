// primitive
// 7 types : string,number,boolean , null, undefined,symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
//const bigNumber = 8768757645698097n

// Reference (non primitive)
// array,objects,functions
const heros = ["manu","meenu","izzu"]
let myObj = {

    name : "menu",
    age: 21,
}
const myFunction function(){
    console.log("hello world");
}
console.log(typeof myFunction);

