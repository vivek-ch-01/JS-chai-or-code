let mydate = new Date()
console.log(typeof mydate)

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

let mycreditdate = new Date(2025, 0, 7)
console.log(mycreditdate.toDateString());

let mycrdate = new Date(2025, 0, 7, 5, 3)
console.log(mycrdate.toLocaleString());

let myowndate = new Date("01-14-2025")
console.log(myowndate.toLocaleString());

let mytimestamp = Date.now()            //showing its time in millisec since  January 1, 1970 00:00:00 UTC
console.log(mytimestamp)
console.log(Date.now()/1000);           // converting millisec inn seconds
console.log(Math.floor(Date.now()/1000));   //removing decimials.

console.log(myowndate.getTime());       //gettime()--it's used on a Date object and returns the number of milliseconds since January 1, 1970 00:00:00 UTC, just like Date.now().

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

//some mpre eg---
newdate.toLocaleString('default',{
    weekday: "long",
})

