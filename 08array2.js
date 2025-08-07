const marvelhero =["thor", "ironman", "spiderman"]
const dchero    = ["superman", "flash", "batman"]

const allhero = [...marvelhero, ...dchero]  //merging arryas
console.log(allhero);

const anotherarray = [1, 2, 3, [4,5,6], 7, [6,7, [4,5]]]
const allarrays = anotherarray.flat(Infinity)   //array ke andar jo array hoga sabko ek hi array me le aayega
console.log(allarrays);

console.log(Array.isArray("vivek")) //array hai ya nahi check
console.log(Array.from("vivek"))    // make a string into array

console.log(Array.from({name: "vivek"}));       //interesting concept.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Used to create a new array from a list of arguments, regardless of number or type.









