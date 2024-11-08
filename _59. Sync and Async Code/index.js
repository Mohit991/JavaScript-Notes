// synchronous  = executes line by line consecutively in a sequential manner.
//                code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently without waiting.
//                Doesn't block the execution flow and allows the program to continue.
//                (I/O operations, network requests, fetching data)
//                handled with callbacks, promises, async/await

/*************** Sync code ***********/

console.log(`Task 1`); // firstly executed
console.log(`Task 2`); // secondly executed
console.log(`Task 3`); // thirdly executed

/*************** Async code ***********/

// setTimeout() is one of the async functions.
// setTimeout() runs concurrently with other code and not in a sequential manner.
setTimeout(() => console.log(`Task 1`), 3000); // executed at last

console.log(`Task 2`); // firstly executed
console.log(`Task 3`); // secondly executed

/**************************/
// fun1 is async because it has a setTimeout
function fun1(callback) {
    setTimeout(() => {
        console.log(`Task 1`);
        callback();
    }, 3000);
}

// fun2 is sync
function fun2() {
    console.log(`Task 2`);
    console.log(`Task 3`);
    console.log(`Task 4`);
}

fun1(fun2);

// Output:
// Task 1 // this happens after 3 seconds
// Task 2
// Task 3
// Task 4
