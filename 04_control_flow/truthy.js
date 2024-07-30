const username = []

if(username){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

/* if (username.length === 0){
    console.log("Array is empty");
} */

    const emptyObj = {}

    if(Object.keys(emptyObj).length === 0){
        console.log("Object is empty");
    }


    // Nullish Coalescing Operator (??): null undefined

    // val1 = 10 ?? 20
    // val1 = null ?? 10
    // val1 = undefined ?? 10
     val1 = null ?? 20 ?? 10 

    console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 200

iceTeaPrice >= 150 ? console.log("more than 150") : console.log("less then 150");