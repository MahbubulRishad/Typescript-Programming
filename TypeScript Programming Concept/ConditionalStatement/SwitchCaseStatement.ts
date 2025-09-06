// switch (expression)
// condition always returns true/false but expression can be returened anything

/*
switch (expression){
    case 1: statements;
            break;
    
    case 2: statements;
            break;

    caes 3: statements;
            break;

    default: statements;
}
*/

// Ex-1: Depending value of the day, print corresponding day of the week
let dayNumber: number = 8;

switch (dayNumber) { //condition
    case 1:
        console.log("Friday");
        break;

    case 2:
        console.log("Saturday");
        break;

    case 3:
        console.log("Sunday");
        break;

    case 4:
        console.log("Monday");
        break;

    case 5:
        console.log("Tuesday");
        break;

    case 6:
        console.log("Wedneday");
        break;

    case 7:
        console.log("Thursday");
        break;

    default:
        console.log("Provide valid input");

}

// Ex-2
let x: number = 20, y: number = 13;

switch (x - y){  // expression
    case 0:
        console.log("Result 0");
        break;

    case 5:
        console.log("Result 5");
        break;

    case 10:
        console.log("Result 10");
        break;

    default:
        console.log("Result Other");

}