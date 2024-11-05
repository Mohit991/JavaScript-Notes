// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property
// we can do validations while setting or getting the values/properties

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // setters
    set width(newWidth) {
        if (newWidth > 0) {
            // _width is a private property
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            // _height is a private property
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    // getters
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

// whenever you want to set the value of these properties, setters will be called automatically.
const rectangle = new Rectangle(2, 4);

// setters will be called for below two lines.
rectangle.width = 100;
rectangle.height = 200;

// whenever you want to read or get these properties, getters will be called automatically.
console.log(rectangle.width, rectangle.height);

/************************************************/

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    // setters
    set firstname(newFirstname) {
        if (typeof newFirstname === "string" && newFirstname.length > 0) {
            this._firstname = newFirstname;
        } else {
            console.error("Firstname must be string and non-empty");
        }
    }

    set lastname(newLastname) {
        if (typeof newLastname === "string" && newLastname.length > 0) {
            this._lastname = newLastname;
        } else {
            console.error("Lastname must be string and non-empty");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("age must be number and non-negative");
        }
    }

    // getters
    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Mohit", "Sharma", 25);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
