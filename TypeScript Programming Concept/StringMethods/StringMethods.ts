// String - text value or combination of characters

let str1: string = "This is a string";
let str2: string = 'This is a string with single quote';
let str3: string = `This is a string with backlit`;

console.log(str1);
console.log(str2);
console.log(str3);

// String Method

let str: string = "Hello Typescript";

// 1. length 
console.log("Length of String: ", str.length);


// 2. Converting the case 
console.log("Upper case: ", str.toUpperCase());
console.log("Lower case: ", str.toLowerCase());


// 3. chatAt(index) and indexOf(string)
console.log("CharAt: ", str.charAt(8));
console.log("IndexOf: ", str.indexOf("Type"));


// 4. substring()
console.log("Sub-String - ", str.substring(1, 10));
console.log("Sub-String - ", str.substring(1));


// 5. includes() -check string contains, return true/false - case sensitive
console.log("Includes method - ", str.includes("test")); //false
console.log("Includes method - ", str.includes("Hello")); //true


// 6. startsWith() - endsWith() - return boolean value
console.log("Starts with: ", str.startsWith("Hello"));
console.log("End with: ", str.endsWith("pt"));

console.log("Starts with: ", str.startsWith("Test"));
console.log("End with: ", str.endsWith("."));


// 7. replace() - replace the string
let updatedString = str.replace("Typescript", "Wrold");
console.log("Replaced string: ", updatedString);


// 8. split() - break the str into multiple parts based on delimeter, returns array
let words: string[] = str.split(" ");
console.log("Split method: ", words);

// ex-2
let gmail: string = "abc@gmail.com, xyz";
let key: string[] = gmail.split(",");
console.log("After spliting: ", key);


// 9. trim(), trimStart(), trimEnd() - remove the space
let sentence: string = "   I Love my Country    ";
console.log("Original String: ", sentence);

console.log("Trim:", sentence.trim());
console.log("Trim-Start:", sentence.trimStart());
console.log("Trim-End:", sentence.trimEnd());


// 10. concat() -  join two or more string

let concatString = str1.concat(str2);
console.log("After concat:", concatString);


// String immutablility

let num: number = 10;
let res = num + 5;
console.log(res);
console.log(num);

let modifyString = str1.concat("Test");
console.log(str1);
console.log(modifyString);

// multiline string - ` `
let multiline: string = `let going to
                        Market`;
console.log(multiline);