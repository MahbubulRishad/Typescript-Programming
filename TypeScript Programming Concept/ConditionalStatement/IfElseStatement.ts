// if condition

let age: number = 20;

if (age > 18) {
    console.log("Eligible for applying job");
}


// if-else
age = 15;

if (age > 20) {
    console.log("Adult");
} else {
    console.log("Child");
}

// if number is dividable by 2, it is even; otherwise odd

let checkNumber: number = 24;

if (checkNumber % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd")
}

// alternative - Using Ternary operator
checkNumber = 10;

let checkResult = (checkNumber % 2 == 1) ? `${checkNumber} - Odd` : `${checkNumber} - Even-Number`;
console.log(checkResult);


// Nested if-else
// Depending on marks, display appropiate grade

let marks: number = 65;

if (marks > 100 || marks < 0) {
    console.log(`Invalid Number ${marks}`);
}
else {
    if (marks >= 80 && marks <= 100) {
        console.log(`Grade: A+ Marks: ${marks}`);
    }

    else if (marks >= 70 && marks <= 79) {
        console.log(`Grade: A Marks: ${marks}`);
    }

    else if (marks >= 60 && marks <= 69) {
        console.log(`Grade: A- Marks: ${marks}`);
    }

    else {
        console.log(`Grade: F Marks: ${marks}`);
    }
}

// Browser selection - ex
let browser: string = "Chrome";

if (browser === "Chrome") {
    console.log("Chorme");
}

else if (browser === "Firefox") {
    console.log("Fireffox")
}

else if (browser === "Safari") {
    console.log("Safari");
}

else {
    console.log("Invalid");
}


