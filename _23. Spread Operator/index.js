// spread operator = ... allows an iterable such as an array or a string to be expanded into separate elements
//                   unpacks elements of array or string

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(...numbers); // 1 2 3 4 5

// We can pass in any number of arguments to both the Math. max() and Math. min() methods.
// These methods will return NaN if any of the arguments passed cannot be converted to a number.

// Finding min and max of array
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
console.log(`Max = ${maxNum}, Min = ${minNum}`);

// on string
let username = "Mohit";
let letters = [...username];
console.log(letters);

// shallow copy of an array
let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
console.log(newFruits);

// merging two arrays
let vegetables = ["carrots", "celery", "patatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);
