"use strict";
exports.__esModule = true;
var readline = require("readline");
var pingenerator_1 = require("./pingenerator");
//Receive user input as per prompted question
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Press Enter to get your bacth of 4 digits pin number: ', function () {
    console.log("Here is your Library, Enjoy: " + pingenerator_1["default"]());
    r1.close();
});
