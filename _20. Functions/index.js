// function = A section of reusable code.
//            Declare code once, use it whenever you want. 
//            Call the function to execute that code.  

// defining a function
function happyBirthday(name, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear you!");
    console.log("Happy Birthday to you!");
    console.log(`${name}, you are ${age} years old`);
}

// calling a function
happyBirthday("Mohit", 20)


/******************************************/

function add(x, y){
    return x + y
}

function subtract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}

function isEven(num){
    return num % 2 ? true : false
}

function isEmailValid(email){
    if(email.includes("@")){
        return true
    }
    return false
}

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
console.log(isEven(2));
console.log(isEmailValid("mohit@g.com"));


