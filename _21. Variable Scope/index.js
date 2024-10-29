// variable scope = where a variable is recognized and accessible (local vs global)
// loacl variable = function defined inside a function
// global variable = function defined outside of any function

let y = 10
function fun1(){
    let x = 1 // x is recognised and accessible inside fun1; x is a local variable
    console.log(x);
    console.log(y);
}


