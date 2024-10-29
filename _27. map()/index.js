// map() = accepts a callback and applies that function to each element of an array, then returns a new array.
//         callback will get element, index, array in this specific order.
//         very similar to forEach() but returns a new array.

const nums = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

const squares = nums.map(square);
console.log(squares);

// Or

const squaresNew = nums.map((element) => {
    return Math.pow(element, 2);
});

console.log(squaresNew);

/************************************************/

const students = ["Mohit", "Rahul", "James"];

function upperCase(element) {
    return element.toUpperCase();
}

let upperCaseStudents = students.map(upperCase);
console.log(upperCaseStudents);

//  or

upperCaseStudents = students.map((element) => {
    return element.toUpperCase();
});

console.log(upperCaseStudents);

/************************************************/
// Converting dates from "2024-1-10" ==> "2024/1/10"
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
}

let formattedDates = dates.map(formatDates);
console.log(formattedDates);

// or

formattedDates = dates.map((element) => {
    const parts = element.split("-");
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
});

console.log(formattedDates);
