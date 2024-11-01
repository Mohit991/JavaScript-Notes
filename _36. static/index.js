// static = keyword that defines properties or methods that belong to the class itself
//          rather than the object created. (class owns anything static not the object)         provides static keyword, encapsulation, inheritance.

class MathUtils {
    static PI = 3.14159; // PI belongs to MathUtils

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCicumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.getDiameter(20));
console.log(MathUtils.getCicumference(20));
console.log(MathUtils.getArea(20));

/**********************************************************/

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users.`);
    }
}

const user1 = new User("Mohit");
console.log(user1.username);
console.log(user1.userCount); // this is undefined since static belongs to class and not to the object.
user1.sayHello(); // gives "Hello, my name is Mohit"

console.log(User.userCount); // gives 1

const user2 = new User("Ram");
console.log(user2.username);
console.log(user2.userCount); // this is undefined since static belongs to class and not to the object.
user2.sayHello(); // gives "Hello, my name is Ram"

console.log(User.userCount); // gives 2
User.getUserCount(); // gives "There are 2 users."
