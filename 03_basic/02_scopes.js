// var c = 300

let a = 300

if (true){
   let a = 30
   let b = 50
   //console.log("INNER:", a)
}

// console.log(a);




function one (){
   const username = "Amit"

   function two(){
   const website = "Youtube"
   console:log(username);
   }

   // console.log(website);

   two()
}

// one()


if(true){
   const username = "Amit"

   if(username === "Amit"){
      const website = "youtube"
      console.log(username + website);
   }
   //console.log(website)
}

// console.log(username);

// ++++++++++++++++++++++++ interesting +++++++++++++++++++++

function addone(){
   return num + 1
}
addone(5)

const addtwo = function(num){
   return num + 2
}
addtwo(5)

console.log()
