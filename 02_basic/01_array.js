const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman", "batman"]

const myArr2 = [1, 2, 3, 4]

// console.log(myArr[4]);


// Array methods

/* myArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.pop() */

// myArr.unshift(6)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)

console.log("C", myArr);
console.log(myn2);


