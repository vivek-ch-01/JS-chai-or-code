//there are 7 type of primitive datatypes...
//null,number,bigint,boolean,symbol,string,undefined
let a = null;
let b = 343;
let c = true;
let d = BigInt("540") + BigInt("5");
let e = "vivek"
let f = Symbol("hello guys")
let g = undefined

// use of symbol datatypes---
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid)


console.log(a,b,c,d,e,f,);
console.log(typeof c);

console.log(typeof undefined);          //undefined
console.log(typeof null);               //object

console.log(typeof "vivek");


// Non promitive datatypes---- ARRAY, OBJECTS, FUNCTIONS.

const heros = ["superman","spiderman","antman"];        // Array

let myobj = {
    name:"vivek",                                       //Objects
    age: 25,
}

const myfun = function(){
    console.log("hello world");                         //Function
}



