const accountId = 144553;
let accountEmail= "sagarsatyarthimishra@gmail.com";
var accountPassword = "12345";
accountCity = "Raebareli";
let accountState;

// accountId = 2; // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "sagar@";
accountPassword = "212132";
accountCity = "Gonda";
console.log(accountEmail);

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
