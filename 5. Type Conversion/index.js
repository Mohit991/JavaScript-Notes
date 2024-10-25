//type conversion = change the datatype of a value to another.
//                  convert one datatype to another.

let age = window.prompt("How old are you?");
//age is a string
//Let us convert it to a number, so we can perform number actions

age = Number(age);
//age is now a number

// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); //Output: NaN 'number'
console.log(y, typeof y); //Output: pizza string
console.log(z, typeof z); //Output: true boolean

/*****************************/
let a = "0";
let b = "0";
let c = "0";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a); //Output: 0 'number'
console.log(b, typeof b); //Output: 0 string
console.log(c, typeof c); //Output: true boolean, any string will become true except empty string

/*****************************/
let g = "0";
let h = "0";
let k = "0";

g = Number(g);
h = String(h);
k = Boolean(k);

console.log(g, typeof g); //Output: 0 'number'
console.log(h, typeof h); //Output:  string
console.log(k, typeof k); //Output: false boolean, any string will become true
