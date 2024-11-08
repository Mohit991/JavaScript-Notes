//  Error = An object that is created to represent a problem that occures
//          Error object will represent a problem.

/**************** Error *************/
console.log(`Hello`);
// I accidently wrote console.lag instead of console.log
// This results in an error.
// With the error the program abruptly crashes.
// We need some mechanism to catch the error and make sure our program does not crash.
console.lag(`You reached end`);

// Errors can be generated for all sorts of things:
// Network Errors
// Promise Rejection
// Security Errors

/**************** Handling Error *************/

// try { } = Encloses code that might potentially cause an error
// catch { } = Catches and handles any thrown errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up.
//               eg. close files, close connections, release resources.

try {
    // Error occures here
    console.lag(`Hi`);
} catch (error) {
    // Error is caught here
    // We use console.error to print the error.
    // This will highlight any errors that occure.
    console.error(error);
} finally {
    // Optional
    console.log(`This always executes`);
}

console.log(`You reached the end`);

/**************** Throwing an Error *************/

try {
    const divident = window.prompt("Enter a divident");
    const divisor = window.prompt("Enter a divisor");

    // Throwing error manually if user enters anything other than numbers.
    if (isNaN(divident) || isNaN(divisor)) {
        // use throw keyword to throw an error
        // create an Error object with a message and throw it.
        throw new Error("Values must be a number");
    }

    // Throwing error manually if user enters 0 as divisor.
    if (divisor == 0) {
        // use throw keyword to throw an error
        // create an Error object with a message and throw it.
        throw new Error("You cannot divide by zero.");
    }
    const result = divident / divisor;
    console.log(result);
} catch (error) {
    // If user enters 0, we catch the thrown error here.
    console.error(error);
}
