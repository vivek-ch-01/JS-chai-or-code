// Q1.  Create a const object in javascript , can you change it to hold a number late?

const a = {
    name : "vivek",
    age  : 25,
    iscoder : true
}
// a = 56        // this not allowed because we defined a as a const

a['frien'] = "akash"
a['food'] = "burger"
console.log(a)

//Q2. Write a javascript program to create a word-meaning dictionary of 5 words.

const dict = {
    name: "vivek",
    age: 25,
    learning: true,
    happy: "yes" 
}
console.log(dict)