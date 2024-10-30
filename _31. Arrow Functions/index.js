// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once. 
//                   (parameters) => some code


// creating arrow function
const hello = () => {
    console.log(`Hello`);
}

// invoking the function
hello()

/******************************************/

// creating arrow function
const helloMan = (name) => {
    console.log(`Hello ${name}`);
}

// invoking the function
helloMan("Mohit")

/******************************************/
// using arrow functions in map, filter etc

const nums = [1, 2, 3, 4, 5, 6]

const squares = nums.map((element) => {
    return Math.pow(element, 2)
})

const evenNums = nums.filter((element) => {
    return element%2 == 0
})

const totalSum = nums.reduce((previousResult, nextElement) => {
    return previousResult + nextElement
})

console.log(squares);
console.log(evenNums);
console.log(totalSum);
