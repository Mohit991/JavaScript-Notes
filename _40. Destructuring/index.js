// destructuring = extract values from arrays and objects then assign them to variables in a convenient way.
// [] = to perform array destructuring
// {} = to perform object destructuring

// ----------Example 1--------------------
// Swap the values of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(`a = ${a}, b = ${b}`); // a = 2, b = 1

// ----------Example 2--------------------
// Swap two elements of an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); // [ 'white', 'green', 'blue', 'black', 'red' ]

// ----------Example 3--------------------
// Assign array elements to variables

const newColors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = newColors;

console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(extraColors); // [ 'black', 'white' ]

// ----------Example 4--------------------
// Extract values from objects

const person1 = {
    firstname: "Mohit",
    lastname: "Sharma",
    age: 25,
    job: "Engineer",
};

// We can also set default values in case we dont have the property in the object
const { firstname, lastname, age, job = "Unemployed" } = person1;
console.log(firstname); // Mohit
console.log(lastname); // Sharma
console.log(age); // 25
console.log(job); // Engineer
// if there is no job property in person1, the output will be Unemployed

// ----------Example 5--------------------
// Destructuring in function parameters

function displayAPerson({ firstname, lastname, age, job = "Unemployed" }) {
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    console.log(job);
}

displayAPerson(person1);
// Mohit
// Sharma
// 25
// Engineer

const person2 = {
    firstname: "Mohit",
    lastname: "Sharma",
    age: 25,
};

displayAPerson(person2);
// Mohit
// Sharma
// 25
// Unemployed
