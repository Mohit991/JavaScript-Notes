// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical.
//          lexicographic = (alphabet + numbers + symmbols) as strings

/********Sorting strings**************/

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'coconut', 'orange', 'pineapple' ]

/********Sorting numbers**************/

let numbers = [1, 10, 2, 5, 3, 7, 5, 3, 8, 1];
numbers.sort();
console.log(numbers); // [1, 1, 10, 2, 3, 3, 5,  5, 7, 8]
// numbers are sorted in string format

// If we want to sort numbers numerically
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3,  3, 5, 5, 7, 8, 10]

/********Sorting objects**************/

const people = [
    { name: "Mohit", age: 25, gpa: 3.0 },
    { name: "Rajesh", age: 27, gpa: 4.0 },
    { name: "Ramesh", age: 22, gpa: 1.0 },
    { name: "Rohit", age: 25, gpa: 2.0 },
];

// sort using age(youngest first)
people.sort((a, b) => a.age - b.age);
console.log(people);
// [
//     { name: "Ramesh", age: 22, gpa: 1 },
//     { name: "Mohit", age: 25, gpa: 3 },
//     { name: "Rohit", age: 25, gpa: 2 },
//     { name: "Rajesh", age: 27, gpa: 4 },
// ];

// reverse sort(oldest first)
people.sort((a, b) => b.age - a.age);
console.log(people);
// [
//     { name: "Rajesh", age: 27, gpa: 4 },
//     { name: "Mohit", age: 25, gpa: 3 },
//     { name: "Rohit", age: 25, gpa: 2 },
//     { name: "Ramesh", age: 22, gpa: 1 },
// ];

// This way you can sort using any property of the object

// sorting using name; but name is a string. So, we have to use a different formula.
// For any property of object which is a string, we have to use below formula.
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// [
//     { name: "Mohit", age: 25, gpa: 3 },
//     { name: "Rajesh", age: 27, gpa: 4 },
//     { name: "Ramesh", age: 22, gpa: 1 },
//     { name: "Rohit", age: 25, gpa: 2 },
// ];

// for reverse order
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
// [
//     { name: "Rohit", age: 25, gpa: 2 },
//     { name: "Ramesh", age: 22, gpa: 1 },
//     { name: "Rajesh", age: 27, gpa: 4 },
//     { name: "Mohit", age: 25, gpa: 3 },
// ];
