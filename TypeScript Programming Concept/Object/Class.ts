// Class
class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): void {
        console.log("Full name: ", this.getFullName() + " " + "Age: ", this.age);
    }
}

let akash = new Person("Akash", "Saha", 30);
akash.getDetails();

let mahbubul = new Person("Mahbubul", "Rishad", 28);
mahbubul.getDetails();

