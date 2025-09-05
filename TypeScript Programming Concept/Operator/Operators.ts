let a: number = 30, b: number = 20;

// Arithmetic Operators
console.log("---------Arithmetic Operators--------");

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment Opeartor
console.log("---------Assignment Operators--------");

a = 10, b = 5;
a += b; //a = a + b;
console.log(a);


// Relational Opeartor (< > >= <= == != === ) - return true/false
console.log("---------Relational Operators--------");

a = 10, b = 20;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a != b); // true
console.log(a == b); // false
console.log(a === b); // false

// Difference between (==) and (===) - strict equality
console.log("--Difference between (==) equality and (===) - strict equality--");

let num1: any = "10";
let num2: any = 10;
console.log(a == b); // true --> check only values

console.log(num1 === num2); // false --> check value along with data type (check both type and values)



// Logical Oprators (&&, ||, !) - return boolean
console.log("---------Logical Operators--------");

let b1: boolean = true, b2: boolean = false;
console.log(b1 && b2); // false
console.log(b1 || b2); // true
console.log(!b1); // false
console.log(!b2); // true

console.log("--Relational and Logical Operator--");

a = 5, b = 10;
console.log((a < b) && (b >= a)); // true
console.log((a > b) || (b >= a)); // true
console.log((a > b) || (b <= a)); // false



// Increment (x++) and Decrement (x--) Oprators 
console.log("---------Increment (x++) and Decrement (x--) Operators--------");

let x: number = 10;
x++;
console.log(x);

console.log("--Post Incrementation--")
x = 5;
let res = x++; // initially x(5) will be restore in res then perform incrementation
console.log(res); // 5
console.log(x); // 6

let res2 = x;
console.log(res2); // 6

console.log("--pre-Increment");
let y=10;
let res3 = ++y;
console.log(res3); // 11 - perform increment first then restore data

