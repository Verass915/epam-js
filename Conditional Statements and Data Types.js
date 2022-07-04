//+
let boolean1 = false;
let string1 = "string";
let addingBooleanToString = boolean1 + string1;
console.log (addingBooleanToString); //falsestring

let string2 = "string";
let number2 = 15;
let addingStringToNumber = string2 + number2;
console.log (addingStringToNumber); //string15

let number3 = 15;
let boolean3 = false;
let addingNumberToBoolean = number3 + boolean3;
console.log (addingNumberToBoolean); //15

//*
let string4 = "string";
let boolean4 = false;
let multipleStringByBoolean = string4 * boolean4;
console.log (multipleStringByBoolean); // NaN

let string5 = "string";
let number5 = 15;
let multipleStringByNumber = string5 * number5;
console.log (multipleStringByNumber); // NaN

let number6 = 15;
let boolean6 = false;
let multipleNumberByBoolean = number6 * boolean6;
console.log (multipleNumberByBoolean); // 0

// /
let string7 = "string";
let boolean7 = false;
let devideStringByBoolean = string7 / boolean7;
console.log (devideStringByBoolean); // NaN 

let string8 = "string";
let number8 = 15;
let devideStringByNumber = string8 / number8;
console.log (devideStringByNumber); // NaN

let number9 = 15;
let boolean9 = false;
let devideNumberToBoolean = number9 / boolean9;
console.log (devideNumberToBoolean); // Infinity

// conversion
let s = "";
console.log(typeof s); // string

s = Number(s); // becomes a number
console.log(typeof s); // number

s = String(s); 
console.log(typeof s); // string



console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
