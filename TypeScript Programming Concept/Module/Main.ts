import { appName } from "./Modules";
import { add } from "./Modules";
import { Print } from "./Modules";

console.log("App name: ", appName); // export variable

// export function
let addSum = add(10, 20);
console.log("Sum: ", addSum);


// export class
let p1 = new Print();

p1.printInfo();
let str:string = p1.convertUpperCase("typescript");
console.log(str);
