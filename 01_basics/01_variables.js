const accountId = 1118;
let accountEmail = "shahed.shihab.0@gmail.com";
var accountPassword = "123456";
accounCity = "Joypurhat";
let accountState;

// accountId = 1099; // not allowed to re assign value in constant variable

accountEmail = "shahedalaminshihab@gmail.com";
accountPassword = "123123";
accounCity = "Dhaka";

/*
    Prefer not to use "var"
    because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accounCity, accountState]);