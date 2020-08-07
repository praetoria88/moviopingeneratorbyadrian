"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const pingenerator_1 = require("./pingenerator");
//Receive user input as per prompted question
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Press Enter to get your bacth of 4 digits pin number: ', () => {
    console.log(`Here is your Library, Enjoy: ${pingenerator_1.default()}`);
    r1.close();
});
