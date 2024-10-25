//const = a variable that cannot be changed

const PI = 3.14159; //value of pi cannot be changed later in the program.
let radius;
let circumference;

radius = window.prompt("Enter radius");

radius = Number(radius);
circumference = 2 * PI * radius;
console.log(circumference);
