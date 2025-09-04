// Variable: holds data

// var, let, const

// syntax: keyword variableName: data-type(optional)
// Ex: var age:number = 30

var age: number = 30;
console.log(age);

// var vs let vs const
// --------------------------
/* 1. scope
2. Declaration / Value Assignment
3. Re - Declaration
4. Re - initialization / Re - assignment
5. Hosting */


// var: We should not use var in modern JS/TS. Avoid var because it has some function scope and lead to unexpected error
// let: use let when you need a variable that can change
// const: when the variable value should not change


// 1. Scope - Accessible area (Functional scope(var) & Block scope(let, const))

// var
function varScope() {
    if (true) {
        var msg: string = "Var";
        console.log(msg + " - inside block");
    }
    console.log(msg + " - outside block -> Accessible");
}

varScope();


// let/const
function blockScope() {
    if (true) {
        let letValue: string = "let";
        const constValue: string = "const";

        console.log("Inside block " + letValue + " - yes");
        console.log("Inside block " + constValue + " - yes");
    }

    /*  console.log(letVale); - not accessible outside block
     console.log(constValie); - not accessible outside block */
}

blockScope();


// 2. Declaration / Value Assignment

// var can be declared without initialization
var num;
console.log(num); // undefined

num = 30; // initialization
console.log(num);


// let can also be declare without initialization
let A;
console.log(A);

A = "Let key word";
console.log(A);


// const - must be initialize at the time of declaration
const nameA: string = "Mahbubul";



// 3. Re - Declaration
// var allows re-declaration
// let and const not allows re-declaration (making code safer)



// var allows re-declaration
// not safer
var city = "New York";
var city = "Los Angeles";

console.log(city);


// let - not allows re-declartion
let country = "Bangla";
// let country = "US"; // not allows


// const - not allows re-declartion
const planet = "Earth";
// const planet = "mars"; // not allwed



// 4. Re - initialization / Re - assignment
// var and let - re-assignment allowed 
// const not allowed re-assignment

var age = 25;
age = 36;
console.log(age);


let subject = "Math";
subject = "Bangla";
console.log(subject);


const dept = "QA";
// dept = "Dev"; // not allowed
console.log(dept);


// 5. Hosting - trying access data before initialization
// var
console.log(x); // undefined
var x = 10;
console.log(x);


// let
// console.log(y); // not initialized
let y = 10;
console.log(y);


// const
// console.log(z); // not initialized
const z = 10;
console.log(z);
















