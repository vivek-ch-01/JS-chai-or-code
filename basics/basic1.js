const accountid = 144553
let accountEmail = "vivek@gmail.com"
var accountpassword = "12345"   /*
                                    prefer not to use var
                                    because of issue in block scope and functional scope
*/


accountcity = "jaipur"
//accountid = 444       //this is not alllowed because const cant be changed
accountEmail = "abc@gmail.com"
accountpassword = "2566"
accountcity = "Benguluru"

console.log(accountid);

console.table([accountid,accountEmail,accountpassword,accountcity])
