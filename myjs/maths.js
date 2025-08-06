console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 5, 6, 8));
console.log(Math.max(4, 3, 5, 6, 8));

console.log(Math.random());         //randomely slects a number between 0 to 1
console.log(Math.random()*10);      //randomly selects anumber between 0 to 9
console.log((Math.random()*10) + 1);    // adding +1 to avoid 0.123etc. it selects a number between 1 to 9
console.log(Math.floor(Math.random()*10) + 1);

// randomly selects a value from a given range----

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // randomly selects a num between 10 t0 20

