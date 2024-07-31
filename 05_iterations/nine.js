const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

/* const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval is ${currval}`);
    return acc + currval
}, 5) */



const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0)

console.log(myTotal);


const coures = [
    {
        itemName: "JS coures",
        price: 999
    },
    {
        itemName: "Py coures",
        price: 2299

    },
    {
        itemName: "Mobile dev coures",
        price: 6999
    },

    {
        itemName: "data science coures",
        price: 12999
    },
]


const priceToPay = coures.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);