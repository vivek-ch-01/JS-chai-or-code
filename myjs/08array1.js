const myarr = [4, 5, 7,"vivek"]
console.log(myarr[0]);
console.log(myarr.indexOf(7));      //showing the elemnt's index.

const myarr2 = new Array(2, 4, 6, "vivekch")    //2nd way to define an array. array as object
console.log(myarr2[2]);

//Array Methods ---

myarr.push(8)           // adds an elents in end of array.
console.log(myarr);
myarr.pop()             //remove last element.
console.log(myarr);

const newarr = myarr.join()      //converts the numbers into string in array.
console.log(newarr);
console.log(typeof newarr);

//Slice or splice or array---

let fruits = ['apple', 'banana', 'cherry', 'date'];
let result = fruits.slice(1, 3);    //slice means (does not modify original array)
console.log(result);       // ['banana', 'cherry'] mtlb yaha index(1) include but index(3) exclude h.
console.log(fruits);       // ['apple', 'banana', 'cherry', 'date'] original array mein koi change nhi


let fruit2 = ['apple', 'banana', 'cherry', 'date'];
let removed = fruit2.splice(1, 2);  // remove 2 items from index 1
console.log(removed);      // ['banana', 'cherry']
console.log(fruit2);       // ['apple', 'date']  Splice means (modifies the original array)













