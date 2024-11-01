// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

// NOTE: this does not work with arrow functions.

const person1 = {
    name: "Mohit",
    favFood: "Hams",
    sayHello: function () {
        // we use this to access properties of the same object.
        // here, this is reference to person1 object.
        // this.name = person1.name
        console.log(`hi! I am ${this.name}`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}`);
    },
};

person1.sayHello();
person1.eat();

/*************************************/

// outside of any object, this refers to window object.
console.log(this);
