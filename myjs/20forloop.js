// for

for (let index = 0; index <= 10;  index++) {
    const element = index;
    console.log(element);
}

// eg 2. (for loop with if)----

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
    
}

// eg 3. (for loop mein loop)-----

// printing table from 1 to 10----

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10 ; j++) {
        //console.log(`inner loop value: ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j); //🔹 How it works:
                                                // i and j are numbers (from the loops).
                                                // Example: i = 2, j = 3.
                                                // String concatenation happens with +.
                                                // i + '*' → "2*" (turns into a string).
                                                // "2*" + j → "2*3".
                                                // "2*3" + '=' → "2*3=".
                                                // Finally: "2*3=" + (i*j)
                                                // i*j → 2*3 = 6.
                                                // Result: "2*3=6".
                                                // console.log prints that string.
        
        
        
    }
    
    
}


// for loop with array---

let myarray = ["flash", "batman", "Superman"]
console.log(myarray.length);


for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

// break and continue-----

// break----
for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        break
        
    }
    console.log(`Value of i is ${index}`);
}
// continue----
for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5");
        continue
        
    }
    console.log(`Value of i is ${index}`);
}











