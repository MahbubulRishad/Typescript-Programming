export class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car started....");
    }

    stop() {
        console.log("Car stopped....");
    }

    displayInfo() {
        console.log(`Name: ${this.name}, color: ${this.color}, Model: ${this.model}`);
    }
}