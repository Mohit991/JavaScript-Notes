// nested objects = Objects inside of other Objects.
//                  Allow you to represent more complex data structures.
//                  Child Object enclosed by a Parent Object.

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const Person = {
    fullname: "Mohit Sharma",
    age: 30,
    isStudent: false,
    hobbies: ["Music", "Coding", "Science"],
    address: {
        street: "First",
        city: "New York",
        country: "USA",
    },
};

console.log(Person.fullname); // Mohit Sharma
console.log(Person.age); // 30
console.log(Person.isStudent); // false
console.log(Person.hobbies); // [ 'Music', 'Coding', 'Science' ]

console.log(Person.address); // { street: 'First', city: 'New York', country: 'USA' }
console.log(Person.address.street); // First
console.log(Person.address.city); // New York
console.log(Person.address.country); // USA

// using for loop to get all the values
for (const property in Person.address) {
    console.log(Person.address[property]);
}

/******************************************/

class Human {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const human1 = new Human("Mohit", 20, "First", "New York", "USA");
console.log(human1);
// Human {
//     name: 'Mohit',
//     age: 20,
//     address: Address { street: 'First', city: 'New York', country: 'USA' }
//   }

console.log(human1.address); // Address { street: 'First', city: 'New York', country: 'USA' }
console.log(human1.address.street); // First
console.log(human1.address.city); // New York
console.log(human1.address.country); // USA
