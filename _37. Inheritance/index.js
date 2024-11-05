// Inheritance = allows a new class to inherit properties and methods
//               from an existing class. (parent --> child)
//               helps with code reusability.

// Helps with DRY principle (Don't Repeat Yourself)

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating.`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
    run() {
        console.log(`This ${this.name} running`);
    }
}

class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`This ${this.name} swimming`);
    }
}

class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`This ${this.name} flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive); // true
rabbit.alive = false;
console.log(rabbit.alive); // false

// inherited from parent class
rabbit.sleep();
rabbit.eat();

// class's own method
rabbit.run();

// inherited from parent class
fish.eat();
fish.sleep();

// class's own method
fish.swim();

// inherited from parent class
hawk.sleep();
hawk.eat();

// class's own method
hawk.fly();
