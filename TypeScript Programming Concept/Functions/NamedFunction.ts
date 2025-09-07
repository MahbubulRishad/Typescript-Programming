// NamedFunction
/*
function functionName (parameter): returntype {
    code
}
 */


// No paramter - No return type

function getMsg(): void {
    console.log("HI.....Welcome");
}

getMsg();


// Parametrize with return type function
function getSum(a: number, b: number): number {
    return (a + b);
}
console.log("Sum: ", getSum(10, 20));


// Named Functions with Rest parameter
console.log("--Named Functions with Rest parameter--");

function getRestSum(...num: number[]): number {
    let i: number;
    let sum: number = 0;

    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}

let vSum: number = getRestSum(10, 20, 30, 40);
console.log(`SUM: ${vSum}`);

// Named Functions with Rest parameter - multiple type
console.log("--Named Functions with Rest parameter - multiple type--");

function findElement(...element: (number | string)[]): number {
    return element.length;
}

console.log(findElement(3, "Rafa", 5, "rokib"));
console.log(findElement(3, "Rafa", 5, "rokib", 6, "Named", 8));



// Named Functions with Optional parameter
console.log("--Named Functions with Optional parameter--");

function displayDetails(id: number, name: string, mailId?: string): void {
    console.log("Id:", id);
    console.log("Name:", name);

    if (mailId != undefined) {
        console.log("Gmail:", mailId);
    }
}

displayDetails(10, "Rishad", "abc@gmail.com");
displayDetails(10, "Rishad");


// Named Functions with Default parameter
console.log("--Named Functions with Default parameter--");

function calculateDiscount(price:number, rate:number = 0.50): void{
    let discount = price * rate;
    console.log(`Discount: ${discount}`);
}

calculateDiscount(100,0.6);
calculateDiscount(200);