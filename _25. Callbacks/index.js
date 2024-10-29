// callback = a function that is passed as an argument to another function. 

// used to handle asynchronous operations: 
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// "Hey! when you're done, call this next."


function hello(){
    setTimeout(function() {
        console.log(`Hello!`);
    }, 3000)
    
}

function goodbye(){
    console.log(`Goodbye!`);
}

// we call hello before goodbye. But goodbye is executed before hello.
// First Goodbye! is printed and then Hello! is printed. 
// This is because hello takes some time to execute(3000ms).
hello()
goodbye()

// I want to make sure that hello is executed first and then goodbye is executed. 
// To do so, we call hello and pass goodbye function as a argumnet(callback).

function helloNew(callback){
    console.log(`Hello!`);
    callback()
}

function goodbyeNew(){
    console.log(`Goodbye!`);
}

helloNew(goodbyeNew)

// Now Hello! is printed and then Goodbye! is printed.  

/**************************************************/

function sum(callback, x, y){
    let result = x + y
    callback(result)
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole, 1, 2)