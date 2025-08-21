// Nullish coalescing operator (??) : only work with null and undefined

let val1;
//val1 = 5 ?? 10                 //outputb-- 5
//val1 = null ?? 10             //output -- 10
//val1 = undefined ?? 15        //output --  15
val1 = null ?? 10 ?? 20         //output --  10
console.log(val1);

// Ternary Operator---   condition ? true :false

const teaprice = 100
teaprice <=80 ? console.log("less than 80") : console.log("more than 80")
