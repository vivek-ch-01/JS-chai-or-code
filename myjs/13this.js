const user = {
    username: "vivek",
    price:  999,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`);    //Here, this refers to the user object.
        console.log(this);
        
    }
}

user.welcomemsg()
user.username = "sam"
user.welcomemsg()
console.log(this);  // this give output only {}
