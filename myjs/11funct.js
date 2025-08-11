//In JavaScript, a function is a reusable block of code that performs a specific task when called or invoked.
//It can take inputs (called parameters), process them, and optionally return a value. Functions help organize code, avoid repetition, and make programs easier to read and maintain.

function saymyname(){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");

}

saymyname()  

//making a function to add two number.
function add2num(num1, num2){
    console.log(num1 + num2);
}
 
add2num(3, 4)

// use of return --- jaha v return type kar de uske baad koi v code excute nahi hogi
// eg1-----
function addtwonum(number1, number2){
    let result = number1 + number2
    return result
}
const result = addtwonum(3, 5)
console.log("result: ",result);

//eg2----
function loginusermessage(username){
    return `${username} just logged in`
}
console.log(loginusermessage("vivek"))

//eg3----
function loginuser(usernamee){
    if(usernamee === undefined){
        console.log("please enter a usernmae");
        return
    }
    return ` ${usernamee} just logged in`
}
console.log(loginuser());



