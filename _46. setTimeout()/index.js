// setTimeout() = function in JS that allows you to schedule the execution
//                of a function after an amount of time in milliseconds.
//                Times are approximate. (varies based on the workload of the JS runtime env)
//                Syntax: setTimeout(callback function, delay in ms)

// clearTimeout() = can cancal a timeout before it triggers
//                  Syntax: clearTimeout(timeout ID)

/***************** setTimeout() Example 1 *******************/

function sayHello() {
    console.log(`Hello`);
}
setTimeout(sayHello, 3000); // prints 'Hello' after three seconds

// or

setTimeout(function () {
    console.log(`Hello`);
}, 3000);

// or

setTimeout(() => {
    console.log(`Hello`);
}, 3000);

/***************** clearTimeout() Example 1 *******************/

const timeoutId = setTimeout(() => {
    console.log(`Hiii`);
}, 3000);

clearTimeout(timeoutId); // above timeout is cancelled.
