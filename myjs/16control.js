// IF - ELSE 

const temp = 41

if (temp < 50){
    console.log("less than 50");
    
}else{
console.log("tempreature is greater than 50");
}


// Nested if - else 

const balance = 1000
if (balance < 500) {
    console.log("less than");
    
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
    
}

// multiple condition ---

const userloggdin = true
const debitcard   = true
const loggedingoogle = false
const loggedinfromemail = true

if (userloggdin && debitcard && 2==2){              //sare condition hone par hi code execute honge
    console.log("Allow to buy course");
    
}


if (loggedingoogle || loggedinfromemail) {              // koi ek condition true ho jaye toh code execute ho jayega 
    console.log("user logged in");              
    
}