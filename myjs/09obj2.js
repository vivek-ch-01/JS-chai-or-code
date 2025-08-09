// singleton object or  object with constructor.....---

// const tinderuser  = new Object()     //singleton object example

const tinderuser = {}           //non singleton object example.
tinderuser.id = "123abc"
tinderuser.name = "vivek"
tinderuser.isloggedin = false

console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {                     //object ke andar another object
            firstname: "vivo",
            lastname: "choudhary"
        }
    }
}
console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const obj5 = {...obj1, ...obj2, ...obj4}     // merging objects
console.log(obj5);

console.log(tinderuser);    // we define tinderuser at top 
console.log(Object.keys(tinderuser)); //to print all keys of the object
console.log(Object.values(tinderuser)); //to print all values of the keys in a object

console.log(tinderuser.hasOwnProperty('isloggedin')); //check if a key is existing in the object or not



















