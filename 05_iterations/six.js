/* const coding = ["js", "rb", "py", "java", "ruby"]

const values = coding.forEach((item) => {
    console.log(item);
     return item
})

console.log(values); */




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* const newNums = numbers.filter((numbers) => {
    return numbers < 6
} ) */



// console.log(newNums);


const books = [
    { title: 'book one', genre: 'history', publish: 1800,
        edition: 1900
    },
    { title: 'book two', genre: 'science', publish: 1900,
        edition: 2000
    },
    { title: 'book three', genre: 'Non-fiction', publish: 2001,
        edition: 2003
    },
    { title: 'book four', genre: 'fiction', publish: 2005,
        edition: 2008
    },
    { title: 'book five', genre: 'geography', publish: 2008,
        edition: 2010
    },
    { title: 'book six', genre: 'history', publish: 2014,
        edition: 2016
    },
    { title: 'book seven', genre: 'history', publish: 2018,
        edition: 2020
    },
    { title: 'book eight', genre: 'science', publish: 2021,
        edition: 2023
    },
];


let userBooks = books.filter( (bk) => bk.genre === 'history')


userBooks = books.filter( (bk) => { 
   return bk.publish >= 1900 && bk.genre === 'history'
})
console.log(userBooks);