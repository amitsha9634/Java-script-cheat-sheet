const user = {
    username: "Amit",
    price: 399,

    WelcomeMessage: function(){ 
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }
  
}
/* user.WelcomeMessage()
user.username = "Falkin"
user.WelcomeMessage() */

// console.log(this);


/* function chai(){
    let username = "Amit"
    console.log(this.username);
}

chai() */


/* const chai = function(){
    let username = "Amit"
    console.log(this.username)
} */

 const chai = () => {
    let username = "Amit"
    console.log(this)
} 
// chai()

/* const addtwo = (num1, num2) => {
    return num1 + num2
} */

//const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => ({username: "Amit"})

//console.log(addtwo(3, 4))




    
});