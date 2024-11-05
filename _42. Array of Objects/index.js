const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 108 },
    { name: "coconut", color: "white", calories: 150 },
    { name: "pineapple", color: "yellow", calories: 55 },
];

console.log(fruits[0].name); // apple
console.log(fruits[0].color); // red
console.log(fruits[0].calories); // 95

fruits.push({ name: "grapes", color: "purple", calories: 50 });

console.log(fruits);
// [
//     { name: "apple", color: "red", calories: 95 },
//     { name: "orange", color: "orange", calories: 45 },
//     { name: "banana", color: "yellow", calories: 108 },
//     { name: "coconut", color: "white", calories: 150 },
//     { name: "pineapple", color: "yellow", calories: 55 },
//     { name: "grapes", color: "purple", calories: 50 },
// ];

/****** using forEach() **********/

fruits.forEach((fruit) => {
    console.log(`fruits name is: ${fruit.name}`);
    console.log(`fruits color is: ${fruit.color}`);
    console.log(`fruits calories is: ${fruit.calories}`);
});

// fruits name is: apple
// fruits color is: red
// fruits calories is: 95
// fruits name is: orange
// fruits color is: orange
// fruits calories is: 45
// fruits name is: banana
// fruits color is: yellow
// fruits calories is: 108
// fruits name is: coconut
// fruits color is: white
// fruits calories is: 150
// fruits name is: pineapple
// fruits color is: yellow
// fruits calories is: 55
// fruits name is: grapes
// fruits color is: purple
// fruits calories is: 50

/****** using map() **********/

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames); // [ 'apple', 'orange', 'banana', 'coconut', 'pineapple', 'grapes' ]
console.log(fruitColors); // [ 'red', 'orange', 'yellow', 'white', 'yellow', 'purple' ]
console.log(fruitCalories); // [ 95, 45, 108, 150, 55, 50 ]

/****** using filter() **********/

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruits);
// [
//     { name: "banana", color: "yellow", calories: 108 },
//     { name: "pineapple", color: "yellow", calories: 55 },
// ];

const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
console.log(lowCalFruits);
// [
//     { name: "apple", color: "red", calories: 95 },
//     { name: "orange", color: "orange", calories: 45 },
//     { name: "pineapple", color: "yellow", calories: 55 },
//     { name: "grapes", color: "purple", calories: 50 },
// ];
