// Singleton
// object.create


// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Amit",
    "full name": "Amit Sharma",
    [mySym]: "mykey1",
    age: 19,
    location: "Bareilly",
    email: "s@gamail.com",
    isLoggedIn: "false"
}

/* console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym]); */


JsUser.email = "sachin@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "amit@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js user`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())