// for

for (let i = 0; i <= 15; i++) {
    const element = i;
    if (element == 5) {
      // console.log("5 is best number");  
    }
   // console.log(element);
} 

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value ${i}`);
   for (let a = 1; a <= 10; a++) {
    //console.log(`Inner loop value ${a} and inner loop ${i}`);
    //console.log(i + '*' + a + ' = ' + i*a);
   }
    
}

let myArray = ["Ironman", "Captain", "Thor"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}



// break and continue

/* for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index} `);
    
} */

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
       continue
    }
    console.log(`Value of i is ${index} `);
    
} 



