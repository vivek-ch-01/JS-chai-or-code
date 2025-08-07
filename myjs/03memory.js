// Stack & Heap memory:-
// Stack memory hold primetive datatypes(num,string,bigint,symbol,null,)
// Heap memory holds Non - primetive datatypes(objects,Arrays,functions)

//stack memory mein orignal variable ki copy bana kar phir usme change hota hai. orignal value me koi cahnge nahi hota hai.
// Exapmle of stack memory:-
let name = "vivek"
let anothername = "name"
anothername = "chaiorcode"
console.log(name);
console.log(anothername);

// Heap memory mein agar koi value change kare toh uski orignal value mein v change ho jati hai.
// Example of Heap memory:-
let userone = {
    email: "vivek@gamil.com",
    upi: "user@ybl"
}
let usertwo = userone
usertwo.email = "abc@gmail.com"
console.log(userone.email);
console.log(usertwo.email);




