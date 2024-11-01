// class = provides a more cleaner and structured way to work with objects compared to traditional constructors.
//         provides static keyword, encapsulation, inheritance.

class Product {
    //creating a constructor
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //creating a method
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(GST) {
        return this.price + this.price * GST;
    }
}

const GST = 0.18; //18%

// creating an object
const product1 = new Product("Shirt", 800);
const product2 = new Product("Pants", 1200);
const product3 = new Product("Underwear", 150);

product1.displayProduct();

const total =
    product1.calculateTotal(GST) +
    product2.calculateTotal(GST) +
    product3.calculateTotal(GST);

console.log(`Your total is ${total}`);
