import { Car } from "./Car";

class Honda extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    // method overriding
    start() {
        console.log("Honda started....");
    }

    yom() {
        console.log(`Name: ${this.name}, color: ${this.color}, Model: ${this.model}, Year of menufacture: ${this.year}`);
    }
}

// Honda
let honda = new Honda("Honda", "Blank", "H-1", 2025);
honda.displayInfo();
honda.yom();