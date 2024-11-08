// ES6 Modules = An external file that contains reusable code
//               that can be imported into other JS files.
//               Write reusable code for many different apps.
//               Can contain variables, classes, functions and more.
//               Introduced as a part of ECMAScript 2015 update.

// To use a module, we have to prefix every variable, function or class with export keyword.

// importing entities from mathUtils.js module
import { PI, getCirumference, getArea, getVolume } from "./mathUtils";

console.log(PI);

const circumference = getCirumference(10);
console.log(circumference);

const area = getArea(10);
console.log(area);

const volume = getVolume(10);
console.log(volume);
