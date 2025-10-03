import { Car } from "./Car";

class BMW extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    start() {
        console.log("BMW started...");
    }

    yom() {
        console.log(`Name: ${this.name}, color: ${this.color}, Model: ${this.model}, Year of menufacture: ${this.year}`);
    }
}

// BMW
let bmw = new BMW("BMW", "Blue", "B-101", 2024);
bmw.start(); // override method invoked
bmw.displayInfo();
bmw.yom();
bmw.stop();


let bmw2 = new BMW("BMW", "Red", "B-102", 2024);
bmw2.start();

// Parent class obj is holding child class obj
console.log("--Parent class obj is holding child class obj--***************");
let car: Car = new BMW ("BMW", "Blue", "B-101", 2024);
car.displayInfo() // method in present both parent and child class

car.start();

// car.yom() - not accessible as it is not a parent method