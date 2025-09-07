// Arrow Function / Lamda Function

/*
    let variableName = (parameters) => {
        code;
    }

    variableName();
 */

// ex-1: Arrow function with no return and no parameter
console.log("--Arrow function with no return and no parameter--");

let greeting = (): void => {
    console.log(`Hello Arrow FunCtion`);
}

greeting();


// ex-1: Arrow function with return and parameters
console.log("--Arrow function with return and parameters--");

let multiply = (num1: number, num2: number): number => {
    return (num1 * num2);
}

let multiplyResult = multiply(10, 5);
console.log(multiplyResult);

// alternative

// ex-1: Arrow function with return and parameters
console.log("--Arrow function with return and parameters (implicit)--");

let multiply2 = (num1: number, num2: number): number => (num1 * num2); // implicit return - single return statement

let multiplyResult2 = multiply2(10, 10);
console.log(multiplyResult2);


// Arrow Function with optional parameter
console.log("--Arrow Function with optional parameter--");


let personDetails = (id: number, name: string, address?: string): void => {
    console.log(`Id: ${id}`);
    console.log(`Name: ${name}`);

    if (address != undefined) {
        console.log(`Address: ${address}`);
    }
}

personDetails(101, "Rishad");
personDetails(102, "Mahbubul", "Sherpur");


// Arrow Function with default parameter
console.log("--Arrow Function with default parameter--");

let defaultMsg = (name: string, greetings: string = "Hello"): void => {
    console.log(`${greetings}: ${name}`);
}

defaultMsg("Mustarin");


// Arrow Function with Rest parameter
console.log("--Arrow Function with Rest parameter--");

let restSum = (...num: number[]): number => {
    let i: number;
    let sum: number = 0;

    for (i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}

let restSumVariable = restSum(10, 20, 30);
console.log(restSumVariable);

restSumVariable = restSum(100, 200, 300, 800, 400);
console.log(restSumVariable);

