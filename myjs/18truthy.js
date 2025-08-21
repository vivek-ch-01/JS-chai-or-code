// falsy values -- false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values-- "0", "false", " ", [], {}, function(){}, 

//eg-- 
const username = ""     // "" it is falsy value 

if (username) {         // here condition is false
    console.log("got user name");
    
} else{
    console.log("don't have user email");
    
}


