// super = keyword used in classes to call the constrcutor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent
// Whatever properties are common in the parent class are initilized using a contructor in parent class.
// We call this constructor from the child class construtor using the super keyword.

class Animal {
    constructor(name, age) {
        // name and age are shared by all animals
        // so, we keep them in the parent.
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        // We have to call superclass constructor before using this.
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} running`);
        // calling the parent class's move method. 
        super.move(this.runSpeed)
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`This ${this.name} swimming`);
        super.move(this.swimSpeed)
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`This ${this.name} flying`);
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit("bunny", 1, 25);
const fish = new Fish("dolly", 2, 12);
const hawk = new Hawk("flin", 3, 50);

console.log(rabbit.name, rabbit.age, rabbit.runSpeed);
console.log(fish.name, fish.age, fish.swimSpeed);
console.log(hawk.name, hawk.age, hawk.flySpeed);


console.log(rabbit.run());
console.log(fish.swim());
console.log(hawk.fly());