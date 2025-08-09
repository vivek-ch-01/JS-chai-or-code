// OBJECT Destructure--------
const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

const {courseinstructor: instructor} = course       //kisi v key ko destructure karne ke liye
// console.log(courseinstructor);   // yeh print nhi hoga kyuki courseinstructor ke naam change krke instructor kr diya hai
console.log(instructor);

//API - API = The waiter/menu system (how you ask for data).    If you use a weather app, that app uses a Weather API to “ask” the weather company for data like temperature and forecast
//JSON = The dish you get served (the data you receive).
//When you ask an API for data, most of the time it sends back the answer in JSON format.

// JSON eg---

// {
//   "name": "Vivek",
//   "age": 21,
//   "skills": ["JavaScript", "HTML", "CSS"]
// }






