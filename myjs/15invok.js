// Immediately invoked function---

(function chai(){
    console.log('hello');
})();           // alaways use semicolon 


// immediately invoked function with arrow function--

( () => {
    console.log('hello guys');
    
})();

//eg.2 passing parameter

( (name) => {
    console.log(`hello guys and ${name}`);
    
})('vivek')

