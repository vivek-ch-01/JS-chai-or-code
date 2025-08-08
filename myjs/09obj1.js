//we declare object in two way--
// 1. singleton
// 2. object literals

const mysym = Symbol("helloo")      //declaring a symbol
//object literals----
const user = {
    name: "vivek",
    age: 25,
    [mysym]: "guys" ,            //we can add a declared symbol in object like this .
    location: "jaipur",
    email: "vivek01@gmail.com",
    isloggedin: false,
    lastlogindays: ["mon", "sat"]
}

console.log(user.email);        //method1 to access a key value
console.log(user["email"]);     //method2 to access a key value
console.log(user[mysym]);       //we can print the symbol value from the object llike this

user.email = "abc@gmail.com"    // overriting a key value

user.greeting = function(){
    console.log("hello js users");
}
console.log(user.greeting());

user.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`); // reference use krne ke liye ` ` ka use kare phir ${} ke andar this.keyname
}
console.log(user.greetingtwo());





