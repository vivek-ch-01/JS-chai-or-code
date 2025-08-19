// nested scopes ---

function one(){
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  this line cannot be valid and can't be executed kyuki const website ek local functon hai toh woh apne function ke andar rehne par hi call karega.
    two()
}
one()

// nested if ---

if (true){
    const username = "vivek"
    if (username==="vivek") {
        const website = "youtube"
        console.log(username + website);
    }
//     console.log(website);        //not valid kyuki website ek local scope hai toh isko sirf iske hi function ke andar call kar sakte hai
    
}
// console.log(username);           // not valid kyuki username ek local scope hai isko sirf iske hi function ke andar call kar sakte hai

// +++++++++++++ interseting concept ++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num){       //can't excute
    return num + 2
}



