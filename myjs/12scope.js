// there are two type of scopes--- 1.global scope  2.local scope

// 1.Global scope -- A variable has global scope if it is declared outside of any function or block.
//                It can be accessed anywhere in the code.

let name = "Vivek"; // Global scope

function greet() {
  console.log("Hello " + name); // can access global variable
}

greet(); // Hello Vivek
console.log(name); // Vivek (accessible outside too)


// 2.Local scope -- A variable has local scope if it is declared inside a function or block ({ }).
//              It can only be accessed inside that function or block.

function greet() {
  let message = "Hello Vivek"; // Local scope
  console.log(message); // works here
}

greet();
// console.log(message); ❌ Error: message is not defined (outside the function)
