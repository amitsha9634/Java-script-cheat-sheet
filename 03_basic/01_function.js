function sayMyName (){
    console.log("A")
    console.log("M")
    console.log("I")
    console.log("T")
}

// sayMyName()

/* function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}*/

function addTwoNumbers(number1, number2){
   //let result = number1 + number2
   //return result
   return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function logginUserMessage(username){
   if(!username){
       console.log('Please enter a username')
       return
   }
   return`${username} Just logged in`
}

// console.log(logginUserMessage("Tony"));
// console.log(logginUserMessage("Steve"))


function calcuteCartPrice(val1, val2, ...num1){
   return num1
}

// console.log(calcuteCartPrice(200, 400, 600, 2000));

const user = {
    Username :"Amit",
    Price: 299
}

function handleObject(anyObject){
    console.log((`Username is ${anyObject.Username} and price is ${anyObject.Price}`));
}

//handelObject(user)
handleObject({
    Username:"Franklin",
    Price:399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));