
// ex-1
let nameA: string[] = [];

console.log(nameA[0] = "Rishad");
console.log(nameA[0] = "Tutul");
console.log(nameA[0] = "Sabuj");

// ex-2
let nameS: string[] = ["Jhon", "Rafa", "Tithi"];
console.log(nameS);

// Another approach with Generic way (Array type)
let empName: Array<string> = ["Rishad", "Mahbubul"];
console.log(empName);

let empId: Array<number> = [10, 20, 3, 40];
console.log(empId);

let empAdress: Array<(string | number)> = ["Rafat", 101, 105, 106, "Jarin"];
console.log(empAdress);

let mixedData: Array<any> = [null, "Rishi", 105, true];
console.log(mixedData);
console.log(mixedData[1]);


for (let i = 0; i < empAdress.length; i++) {
    console.log(`Address: ${empAdress[i]}`);
}


// for in loop - use index
for (let i in mixedData) {
    console.log(mixedData[i]);
}


// for of loop - extracting direct value from index
console.log("---mix Data--");

for (let value of empId) {
    console.log(value);
}


// Array in Function  - passing array to function
// searching element in Array

function search(ele: number, arr: number[]): boolean {
    for (let i in arr) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
}

let arrFunc: Array<number> = [10, 20, 30, 40, 50];

let booleanValue: boolean = search(30, arrFunc);

if (booleanValue === true) {
    console.log(`Element found`);
} else {
    console.log(`Element not found`);
}

let booleanValue2: boolean = search(100, arrFunc);

if (booleanValue2 === true) {
    console.log(`Element found`);
} else {
    console.log(`Element not found`);
}


// function takes an Array and return an array
console.log("--function takes an Array and return an array--");
function capitalWodrs(words: string[]): string[] {
    let result: string[] = [];

    for (let i in words) {
        result[i] = words[i].toUpperCase();
    }
    return result;
}

let strVariable: string[] = capitalWodrs(["Rafia", "Nama", "Aklima"]);
console.log(strVariable);