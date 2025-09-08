// Overloading Function: allows to define multiple versions of a function with the same name but different parameters or return types

/*
    1. signatures of a function
    2. implemets function - should be single implementation that satisfy all the signatures
    3. calling function
 */

// ex-1 - different params and different return types

// signature
function getInfo(id: number): number;
function getInfo(name: string): string;

// implementation
function getInfo(param: (number | string)): (number | string) {

    if (typeof param === "number") {
        return (`user Id:   ${param}`);
    } else {
        return (`User Name: ${param}`);
    }

}

// invoke
console.log(getInfo(101));
console.log(getInfo("Rishad"));



// ex-2 different num of parameters

function add(num1: number, num2: number): number;
function add(num1: number, num2: number, num3: number, num4: number): number;

function add(num1: number, num2: number, num3?: number, num4?: number): number {
    let sum = num1 + num2;

    if (num3 != undefined) {
        sum += num3;
    }

    if (num4 != undefined) {
        sum += num4;
    }

    return sum;
}

let sumRes: number = add(10, 20);
console.log(sumRes);

console.log(add(20, 30, 40, 50));



// ex-3 different return types

function processInput(str: string): string;
function processInput(num: number): number;

function processInput(input: (string | number)): (string | number) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }

    else {
        return input;
    }
}

console.log(processInput("Lafaz"));
console.log(processInput(10));


// ex-4 boolean
function info(str: string): string;
function info(num: number): string;
function info(isMarried: boolean): string;

function info(value: (string | number | boolean)): string {
    if (typeof value === "string") {
        return (`Hello: ${value}`);
    }
    else if (typeof value === "number") {
        return (`Your age: ${value}`);
    }
    else {
        return (value ? "Married" : "Single");
    }
}

console.log(info("Rishad"));
console.log(info(27));
console.log(info(false));