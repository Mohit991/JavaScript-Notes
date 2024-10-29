// array = a variable like structure that can hold more than one value

let fruits = ["apple", "banana", "orange"];

console.log(fruits);

console.log(fruits[0]); //First element
console.log(fruits[1]); //Second element
console.log(fruits[2]); //Third element

// adding an element to the end of an array
fruits.push("coconut")
// ["apple", "banana", "orange", "coconut"]

// removing an element to the end of an array
fruits.pop()
// ["apple", "banana", "orange"]

// adding an element to the start of the array
fruits.unshift("mango")
// ["mango", apple", "banana", "orange"]

// removing an element to the start of the array
fruits.shift()
// ["mango", apple", "banana", "orange"]

// getting the length of an array
let totalFruits = fruits.length; 

// getting index of a specific element
let index = fruits.indexOf("apple")
// will return -1 if element does not exist. 

// looping through array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// or
for(let fruit of fruits){
    console.log(fruit);
}

// sorting an array in alphabatical order
fruits.sort()
fruits.sort().reverse() // In opposite order.  











