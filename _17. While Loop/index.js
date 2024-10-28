// While loop = repeat some code while some condition is true
// Check the condition first and then execute the code if condition turns out to be true

let x = 10
while(x < 20){
    console.log(x);
    x++
}

/****************************************/
// do while loop = repeat some code while some condition is true
// Execute the code first and then check the condition and keep executing as long as the condition is true. 
// Code is exeucted atleast once. 

let uname;

do{
    uname = window.prompt('Enter your name')
}while(uname='' || uname === null)

console.log(`Hello ${uname}`);


/*********************************/

let loggedIn = false
let username
let password

while(!loggedIn){
    username = window.prompt('Enter your username')
    password = window.prompt('Enter your password')

    if(username === 'myUsername' && password === 'myPassword'){
        loggedIn = true
        console.log("You are logged in");
    }
    else{
        console.log("Invalid credentials");
    }
}

