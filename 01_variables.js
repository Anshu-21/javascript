const accountId =144553
let accountEmail ="kumaranshu303393@gmail.com"
var accountPassword ="12345"
accountCity ="Jaipur"
let accountState; 

// accountId = 2 not allowed

accountEmail ="anshu@gmail.com"
accountPassword ="78945"
accountCity ="Bihar"


console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);

/*
Preferred not to use var becoz of issue in block scope and function scope
*/