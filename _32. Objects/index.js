// object = a collection of related properties and/or methods
//          can represent a real world object (people, products, places)
// object = {
//     key: value,
//     function()
// }

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log(`Hi, I am Spongebob`);
    },
    sayBye: function () {
        console.log(`Good bye`);
    },
    // we can also create arrow functions
    eat: () => {
        console.log(`I eat stuff`);
    }
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function () {
        console.log(`Hi, I am Patrick`);
    },
    sayBye: function () {
        console.log(`Bye..`);
    }
};

console.log(`${person1.firstName} ${person1.lastName} is ${person1.age} years old`);
console.log(`${person1.firstName} is employeed: ${person1.isEmployed}`);
person1.sayHello()
person1.sayBye()
person1.eat()

console.log(`${person2.firstName} ${person2.lastName} is ${person2.age} years old`);
console.log(`${person2.firstName} is employeed: ${person2.isEmployed}`);
person2.sayHello()
person2.sayBye()