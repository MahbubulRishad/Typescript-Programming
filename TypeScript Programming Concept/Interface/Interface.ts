// Interface
// interface InterfaceName {
// properties
// method
// }

// ex-1 (Basic interface)
interface Person {
    name: string;
    age: number;
}

let student: Person = {
    name: "Jhon",
    age: 25
}
console.log(student); // { name: 'Jhon', age: 25 }
console.log(student.name);
console.log(student.age);


// ex-2 (Optional properties)
interface Employee {
    eid: number;
    ename: string;
    edept?: string; // optional property
}

let emp: Employee = {
    eid: 101,
    ename: "Rafa"
}

let emp2: Employee = {
    eid: 101,
    ename: "Risk",
    edept: "QA"

}

console.log(emp.eid, emp.ename, emp.edept);
console.log(emp2.eid, emp2.ename, emp2.edept);


// ex-3 (Read-only property)
interface Book {
    title: string;
    readonly bid: string;

    displayInfo(): void; // method - abstract method
}

let book1: Book = {
    title: "Learn Playwright",
    bid: "abcx",

    displayInfo() {
        console.log("Title: ", book1.title, "BookId: ", book1.bid);
    }
}
book1.displayInfo();

book1.title = "Java";
// book1.bid = "azxc"; // not possible because it is read-only
book1.displayInfo();


// ex-4: Extending Interface

// parent interface
interface Animal1 {
    name: string;
}

// child interface
interface Dog extends Animal1 {
    color: string;
}

let myDog: Dog = {
    name: "Buddy",
    color: "Black"
}

console.log(myDog.name, " ", myDog.color);


// ex-5
// Class implements Interface
interface Animal {
    name: string;
    sound(): void;
}

class Cat implements Animal {
    color: string;
    name: string;

    constructor(name: string, color: string) {
        this.color = color;
        this.name = name;
    }

    sound(): void {
        console.log("Sound: Yes");
    }

    displayInfo(){
        console.log("Name: ", this.name);
        console.log("Color: ", this.color);
    }
}

let cat1: Cat = new Cat("Cat", "White");
cat1.displayInfo();
cat1.sound();