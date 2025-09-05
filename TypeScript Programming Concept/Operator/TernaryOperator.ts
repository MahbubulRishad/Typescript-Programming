// Ternary or Conditional operator

// exp ? result1 : result2

console.log("--Ternary Opeartor--");

let a: number = 10, b: number = 15;

let result: number = (a > b) ? a : b;
console.log(result);

let result2: number = (a < b) ? a : b;
console.log(result2);

// ex-1
let personAge: number = 30;
let voter: string = (personAge > 18) ? "Voter" : "Not Voter";
console.log(voter); // voter

let voter2: string = (personAge < 18) ? "Voter" : "Not Voter";
console.log(voter2); // Not-voter