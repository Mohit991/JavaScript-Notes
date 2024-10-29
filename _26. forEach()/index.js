// forEach() = method used to iterate over the elements of an array apply a specific function(callback) to each element.

//             array.forEach(callback)
//             callback will get element, index, array in this specific order.

let nums = [1, 2, 3, 4, 5];

function display(element, index) {
    console.log(`element at ${index} is ${element}`);
}

nums.forEach(display);

// or

nums.forEach((element, index) => {
    console.log(`element at ${index} is ${element}`);
});

/******************************************/
// Doubling each element using forEach()

function double(element, index, array) {
    array[index] = element * 2;
}

nums.forEach(double);
console.log(nums);

// or

nums.forEach((element, index, array) => {
    array[index] = element * 2;
});
console.log(nums);


/******************************************/
// Making each string in an array uppercase. 

let fruits = ["apple", "orange", "banana", "coconut"]

fruits.forEach((element, index, array) => {
    array[index] = element.toUpperCase()
})

console.log(fruits);

/******************************************/
// capitalize first char of each string in an array

let fruitsNew = ["apple", "orange", "banana", "coconut"]

fruitsNew.forEach((element, index, array) => {
    array[index] = element[0].toUpperCase() + element.slice(1)
})

console.log(fruitsNew);