// function expressions = a way to define functions as values or variables

// Uses:
// 1. Callbacks in async operations
// 2. Higher-order functions
// 3. Closures
// 4. Event Listeners

const hello = function () {
    console.log(`Hello`);
};

hello(); // prints hello

/***********************************/
// passing a function as an argument to another function

// We want to call hello after 3000ms or 3s
setTimeout(hello, 3000);

/***********************************/
const nums = [1, 2, 3, 4, 5];

const squares = nums.map(function (element) {
    return Math.pow(element, 2);
});

console.log(squares);
