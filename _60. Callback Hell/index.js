// callback hell = It is a situation in JS where callbacks are nested within
//                 other callbacks to the point that the code is difficult to read.
//                 Old pattern to handle async code.
//                 Use promises + async/await to avoid callback hell.

function task1() {
    setTimeout(() => {
        console.log(`Task 1 Completed`);
    }, 2000);
}

function task2() {
    setTimeout(() => {
        console.log(`Task 2 Completed`);
    }, 1000);
}

function task3() {
    setTimeout(() => {
        console.log(`Task 3 Completed`);
    }, 3000);
}

function task4() {
    setTimeout(() => {
        console.log(`Task 4 Completed`);
    }, 1500);
}

task1()
task2()
task3()
task4()

console.log(`All Tasks Completed`);
// Output:
// All Tasks Completed
// Task 2 Completed
// Task 4 Completed
// Task 1 Completed
// Task 3 Completed

// I want to complete these tasks in order, but as we can see above, they are executed in some random order.
// This is the nature of async code. They can finish any time, rest of our code will not wait for them.
// setTimeout() is an async function, so 'All Tasks Completed' is printed first before the functions.

// If we want to complete these in order we will use callbacks.
// Each task function can accept a function as an argument which will be the next task function.
function task1(callback) {
    setTimeout(() => {
        console.log(`Task 1 Completed`);
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log(`Task 2 Completed`);
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log(`Task 3 Completed`);
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log(`Task 4 Completed`);
        callback();
    }, 1500);
}

// Below is callback hell.
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log(`All Tasks Completed`);
            });
        });
    });
});

// Output:
// Task 1 Completed
// Task 2 Completed
// Task 3 Completed
// Task 4 Completed
// All Tasks Completed

// Tasks are completed in order but the code is very confusing.
