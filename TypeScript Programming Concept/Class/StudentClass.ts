/*
    1. Class
    2. Read only property
    3. Optional property
    4. Static variable and Method
 */

class Student {
    readonly studentId: number; // read-only property can be assigned once inside constructor
    studentName: string;
    static studentSchool: string = "ABC School"; // static
    studentemail?: string; // optional

    constructor(studentId: number, studentName: string, studentEmail?: string) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentemail = studentEmail;
    }

    printStudentDetails(): void {
        console.log("Student id: ", this.studentId);
        console.log("Student Name: ", this.studentName);
        console.log("Sudent School: ", Student.studentSchool);

        if (this.studentemail) {
            console.log("Student Email: ", this.studentemail);
        } else {
            console.log("Email not provided");
        }
    }

    static changedSchoolName(newSchoolName: string): void {
        Student.studentSchool = newSchoolName;
    }
}

let rasin = new Student(101, "Rasin", "rasin@gmail.com");
rasin.printStudentDetails();


let nishi = new Student(102, "Nishi");
nishi.printStudentDetails();


Student.changedSchoolName("XYZ School"); // changing the static property within Static method

rasin.printStudentDetails();
nishi.printStudentDetails();

// try to modify read-only
// rasin.studentId = 103;