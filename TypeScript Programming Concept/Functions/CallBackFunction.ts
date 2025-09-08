// Callback Function: that is passed as an argument to another function and gets executed later

// callback function 
function greetings(msg: string): string {
    // console.log(`${msg}`);
    return msg;
}

// function that take callback function as a paremeter
function printName(name: string, hello: (msg: string) => string): void {
    console.log("Processing name: ");
    let greetingmsg: string = hello("Hello..");
    // console.log(`${name}`);

    console.log(`${greetingmsg}: ${name}`);
}

// invoke function
printName("Rafsan", greetings);



// ex-2
function displayResult(result: number): void {
    console.log(`Your Result: ${result}`);
}

function setMarks(bangla: number, english: number, callback: (result: number) => void): void {
    console.log("Marks Processing...");
    let totalMarks: number = bangla + english;
    callback(totalMarks);
}

setMarks(75, 85, displayResult);
