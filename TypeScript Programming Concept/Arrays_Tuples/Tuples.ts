/* 
    Tuples: fixed length array where each elemen has a specific type
    It helps storing multiple fields of different data types together
*/

// Tuples with two values
let person: [string, number] = ["Jara", 101]; // first value should be string and 2nd one should be number
console.log(person[0]);
console.log(person[1]);

console.log(person);


// Tuple with multiple values
let user: [number, string, boolean, string] = [10, "jhon", true, "BD"];
console.log(user);


// ex-3 
for (let i: number = 0; i < person.length; i++) {
    console.log(person[i]);
}

for (let i in user) {
    console.log(user[i]);
}


for (let value of user) {
    console.log(value);
}


// Array with tuple
console.log("--Array with tuple--");

let student: [number, string][] = [[104, "Akita"], [105, "Rafsana"], [105, "Sathi"]];

for (let i in student) {
    console.log(student[i]);
}

for (let i = 0; i < student.length; i++) {
    for (let j = 0; j < student[i].length; j++) {
        console.log(`Student: ${student[i][j]}`);
    }
}