/* 
1) Prrmitive Data Types
    Number
    string
    Boolean
    Null
    Undefined
    Any
    Union Type
    Void

2) Non-Premitive Data Type
    Array
    Class
    Function
    Interface
    Touple
    etc...........
*/


// Number type
let age: number = 10;
let price: number = 25.5;
let bigNumber: number = 54654354;

console.log("Age: ", age);
console.log("Price: ", price);
console.log("Big Number", bigNumber);

console.log(typeof (age));



// String - represent texual data
/* 
    1. Single Quote ('')
    2. Double Quote ("")
    3. Backtick (``) - when trying parameterize some data into string
*/

let firstName: string = 'Mahbubul';
console.log(firstName);

let lastName: string = "Rishad";
console.log(lastName);

// Hello Mahbubul Rishad
let greeting: string = `Hello ${firstName} ${lastName}`;
console.log(greeting);



// Boolean - represents true/false value
let isStrudrnt: boolean = true;
let hasJob: boolean = false;
console.log("Is Student? ", isStrudrnt);
console.log("Has Job? ", hasJob);



// Null and Undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(emptyValue);
console.log(notAssigned);



// Any - violate the rule of type safety bacause all type data can be stored
// should be used carefully
let value: any = "Siddique";
value = 10;
value = true;

console.log(typeof (value));



// Uniion Type - combine multiple type
let id: number | string | boolean;
id = "ABCDE";
console.log(id);

id = 1010;
console.log(id);



// Void - useed for function that don't return anything
function printShow(): void {
    console.log("Hello.............")
}

printShow();


function getSum(num1: number, num2: number): number {
    return (num1 + num2);
}

console.log(getSum(10,30));


