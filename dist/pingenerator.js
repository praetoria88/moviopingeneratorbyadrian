"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pinGenerator() {
    let output;
    for (let i = 0; i < 999; i++) {
        output += randomPin(i) + ", ";
    }
    return output;
}
exports.default = pinGenerator;
//Random pin generator 
function randomPin(arg) {
    //The minimum and maximum possible PIN 
    //range without applying conditions yet
    let min = 1000;
    let max = 9999;
    let pinCode = Math.floor(Math
        .random() * (max - min + 1)) + min;
    //To apply the conditions on the generated random PIN validation functions
    //will be recursively called during each for loop iteration calling randomPin()
    return ((validatePinUniqueDigits(pinCode) == true) ||
        (validatePinIncremental(pinCode)) == true) ? randomPin(arg) : pinCode;
}
//Function to validate digits to be unique
function validatePinUniqueDigits(number) {
    let strNum = ('' + number).split(''), result = strNum.filter((elem, i) => strNum.indexOf(elem) == i);
    return result.length != ('' + number).length;
}
//Function to validate the digit not to be incremental 
function validatePinIncremental(input) {
    let strInput = ('' + input).split('');
    for (let i = 0; i < strInput.length - 1; i++) {
        if ((parseInt(strInput[i]) + 1) === (parseInt(strInput[i + 1])))
            return true;
    }
    return false;
}
;
