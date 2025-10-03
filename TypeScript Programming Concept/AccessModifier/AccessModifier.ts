class Person {
    public name: string; // accessible everywhere
    protected age: number; // accessible within the class and its subclass
    private nid: number; // only class

    constructor(name: string, age:number, nid:number){
        this.name = name;
        this.age = age;
        this.nid = nid;
    }

    displayPersonDetails(){
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("NID: ", this.nid);
    }
}

class Employee extends Person{
    private empId: number;

    constructor(name: string, age:number, nid:number, empId:number){
        super(name, age, nid);
        this.empId = empId;
    }

    displayEmployeeDetails(){
        console.log("Employee Name: ", this.name); //accessible
        console.log("Employee Age: ", this.age); // accessible - from subclass
        // console.log("Employee NID: ", this.nid); // not accessible - private
        console.log("Employee ID: ", this.empId); // accessible in class
    }
}

let ris = new Employee("Ris", 26, 1010, 101);
ris.displayEmployeeDetails();
ris.displayPersonDetails();

