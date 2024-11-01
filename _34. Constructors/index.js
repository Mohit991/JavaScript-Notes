// constructor = special method for defining the properties and methods of objects.

// constructor
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

// creating object using constructor
const car1 = new Car("Ford", "Mustang", 2023, "Red");
const car2 = new Car("Chevi", "Camero", 2023, "Black");

console.log(car1);
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
