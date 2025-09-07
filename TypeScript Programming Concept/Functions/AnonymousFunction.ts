/*
    let variableName = function (parameters){
        statement
    }
    
    variableName(); 
 */

// ex-1

let greeting = function (): string {
    return "Hello Anonymous Function";
}

console.log(greeting());

// Anonymous func with parameter
let multiplyfunc = function (a: number, b: number): number {
    return (a * b);
}

console.log(multiplyfunc(10, 5));
