// Dates

let myDate = new Date()
/* console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON()); */ 

// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 27)
// let myCreateDate = new Date(2024, 0, 27, 4, 55, 0)
// let myCreateDate = new Date("2024-01-14")
let myCreateDate = new Date("01-14-2024")

// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// ` ${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "",
})