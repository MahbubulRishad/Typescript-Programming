// Always execute once before checking the condition

let i: number = 0;

do {
    console.log(`Number: ${i}`); //string
    console.log("No: ", i); // number
    i++;
} while (i <= 25);


i = 15;

do {
    console.log("Num: ", i);
    i--;
} while (i >= 1);