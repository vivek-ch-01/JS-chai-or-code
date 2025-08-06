// use of var(strings) at differnt plcae in the code---
const name = "vivek"
const age = 25

console.log(`Hello my name is ${name} and my age is ${age}`);

// Strings diifernet methods---

const gamename = new String('vivekch')      //this is also a string but its datatype is a object.
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.charAt(2));
console.log(gamename.indexOf('e'));
console.log(gamename.toUpperCase());

const newstring = gamename.substring(0, 3)         //substring
console.log(newstring);

const anotherstring = gamename.slice(-4, 5);  //slicing of string (slicing me -ve lene pr woh reverse se )
console.log(anotherstring);

const newstr = "   vivek   "
console.log(newstr);
console.log(newstr.trim());

const url = "https://vivekch.com/vivv%20"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))





