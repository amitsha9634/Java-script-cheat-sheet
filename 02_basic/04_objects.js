// const tinderUser = new Object() // this is a Singleton object
const tinderUser = {} // and this is a non-singleton objectc


tinderUser.id = "321abc"
tinderUser.email = "Tony"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "s@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Amit",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}


// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3)

const users = [
    {
        id: 1,
    email: "a@gamil.com"
    },
    {
        id: 1,
    email: "a@gamil.com"
    },
]


users[1].email
/* console.log(tinderUser);

console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser)); */

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 

const coures = {
    couresname:"JS in hindi",
    price: "2999",
    couresInstructor:"Amit"
}

// coures.couresinstructor

const {couresInstructor: instructor } = coures

//console.log(couresInstructor);

/* {
   "name"= "Amit",
    "couresname"= "JS in hindi",
    "price"= "2999"

}*/






