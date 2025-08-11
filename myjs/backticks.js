// Main Uses of Backticks
// 1. String Interpolation (Insert Variables)
// You can put variables directly inside a string using ${...}:

let name = "Vivek";
console.log(`Hello, ${name}!`); 
// Output: Hello, Vivek!

// 2.  2. Multi-line Strings
// Backticks allow you to write strings across multiple lines without \n:

let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;
console.log(poem);

//3. Expression Evaluation
// You can put any JavaScript expression inside ${...}:
let a = 5;
let b = 10;
console.log(`Sum: ${a + b}`); 
// Output: Sum: 15
