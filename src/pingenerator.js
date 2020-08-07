"use strict";
exports.__esModule = true;
function pinGenerator() {
    var output;
    for (var i = 0; i < 999; i++) {
        output += randomPin(i) + ", ";
    }
    return output;
}
exports["default"] = pinGenerator;
//Random pin generator 
function randomPin(arg) {
    //The minimum and maximum possible PIN 
    //range without applying conditions yet
    var min = 1000;
    var max = 9999;
    var pinCode = Math.floor(Math
        .random() * (max - min + 1)) + min;
    //To apply the conditions on the generated random PIN validation functions
    //will be recursively called during each for loop iteration calling randomPin()
    return ((validatePinUniqueDigits(pinCode) == true) ||
        (validatePinIncremental(pinCode)) == true) ? randomPin(arg) : pinCode;
}
//Function to validate digits to be unique
function validatePinUniqueDigits(number) {
    var strNum = ('' + number).split(''), result = strNum.filter(function (elem, i) { return strNum.indexOf(elem) == i; });
    return result.length != ('' + number).length;
}
//Function to validate the digit not to be incremental 
function validatePinIncremental(input) {
    var strInput = ('' + input).split('');
    for (var i = 0; i < strInput.length - 1; i++) {
        if ((parseInt(strInput[i]) + 1) === (parseInt(strInput[i + 1])))
            return true;
    }
    return false;
}
;
