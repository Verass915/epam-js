//+
let a = false;
let b = "string";
let ab = a + b;
console.log (ab); //falsestring

let c = "string";
let d = 15;
let cd = c + d;
console.log (cd); //string15

let e = 15;
let f = false;
let ef = e + f;
console.log (ef); //15

//*
let g = "string";
let h = false;
let gh = g * h;
console.log (gh); // NaN

let i = "string";
let j = 15;
let ij = i * j;
console.log (ij); // NaN

let k = 15;
let l = false;
let kl = k * l;
console.log (kl); // 0

// /
let m = "string";
let n = false;
let mn = m / n;
console.log (mn); // NaN 

let o = "string";
let p = 15;
let op = o / p;
console.log (op); // NaN

let q = 15;
let r = false;
let qr = q / r;
console.log (qr); // Infinity

// conversion
let s = "546";
console.log(typeof s); // string

let t = Number(s); // becomes a number 546
console.log(typeof t); // number



let u = 546;
console.log(typeof u); // number

u = String(u); 
console.log(typeof u); // string



console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
