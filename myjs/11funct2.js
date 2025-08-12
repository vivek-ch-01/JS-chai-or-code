function calculatecartprice(...num){
    return num
}
console.log(calculatecartprice(200, 400, 500));

//function uses with objects..--

const user = {
    username: "vivek",
    price: 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)      //method 1
//method 2 ----- without define a object at first------
// handleobject({
//     username: "vivek",
//     price:199
// })/

// function with arrray-------

const myarray = [200, 500, 600, 700]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(myarray));
// console.log(returnsecondvalue([200, 500, 600, 700]));    //2nd way to print without defining a array at first    

