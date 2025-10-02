// Method Overloading and Constructor Overloading

class Calculator {
    constructor(); //default constructor
    constructor(a: number, b: number); // parameterized constructor

    constructor(a?: number, b?: number) {
        if (a != undefined && b != undefined) {
            console.log("Sum ", (a + b));
        }
        else {
            console.log("Defalut constructor invoked");
        }
    }


    // Method overloading
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number) {
        if (c != undefined) {
            return (a + b + c);
        }
        return (a + b);
    }
}

let cal1 = new Calculator();
console.log("sum 2 digit: ", cal1.add(10,10));
console.log("sum 3 digit: ", cal1.add(10,10,10));

let cal2 = new Calculator(10, 20);