// object contains properties and method
// oject is collection of key and value pairs


// Different ways to create object
// 1. using object type
// 2. Inline type object
// 3. using type aliases
// 4. using classes


// Using Object type - directly define the values for variable
let employee: object = { // object keywords only allows to create propery
    name: "Jhon",
    age: 30,
    salary: 4500,
    dept: "QA"
}

let employee2 = {
    name: "Rasa",
    age: 30,
    salary: 500,
    dept: "Dev",
    getDetails: function (): string {
        // console.log(this.name, this.age, this.salary, this.dept);
        return (`Name:${this.name} Age: ${this.age} Salary: ${this.salary}`);
    }
};

console.log(employee2.getDetails());
console.log(typeof (employee2));

// Accessing Data - another approach
console.log(employee2["name"], employee2["dept"]);
console.log(employee2["getDetails"]());



// 2. Inline type object
let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "Asma",
    age: 15,
    grade: "A+",
    getSummary: function (): string {
        return (`Name: ${this.name} Age: ${this.age} Grade: ${this.grade}`);
    }
};

console.log(student.getSummary());



// 3. using type aliases 
type Book = {
    pId: number,
    pName: string,
    pPrice: number,
    getInfo: () => string
}

let book1: Book = {
    pId: 102,
    pName: "Physices 1",
    pPrice: 500,
    getInfo: function (): string {
        return (`Id: ${this.pId} Product name: ${this.pName} Price: ${this.pPrice}`);
    }
} 

let book2: Book = {
    pId: 103,
    pName: "Math",
    pPrice: 550,
    getInfo: function (): string {
        return (`Id: ${this.pId} Product name: ${this.pName} Price: ${this.pPrice}`);
    }
}

console.log(book1.getInfo());
console.log(book2.getInfo());