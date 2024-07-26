const accountId = 12345;
let accountEmail = "amit@gamil.com";
var accountPassword = "01010101";
accountCity = "budaun";

let accountState;

//accountId = 2; // not allowed 


accountEmail = "sachin@gmail.com";
accountPassword = "02020202";
accountCity = "bareilly";

console.log(accountEmail);

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountEmail, accountCity, accountPassword, accountState]);


