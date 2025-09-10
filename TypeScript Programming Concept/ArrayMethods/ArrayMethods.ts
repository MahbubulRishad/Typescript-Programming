
let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers);

let fruits: string[] = ["Orange", "Mango", "Banana", "Apple"];
console.log(fruits);

// Array - Attribute 
console.log("Numbers Array Length: ", numbers.length);


// 1. push () - add valus to array
numbers.push(60, 70);
console.log("After push Method: ", numbers);

fruits.push("Jack-Fruite", "Lichi", "Papaiya");
console.log("After push Method: ", fruits);


// 2. pop() - remove last element from array
numbers.pop();
console.log("After pop() - ", numbers);

fruits.pop();
console.log("After pop() - ", fruits);


// 3. shift() - removes the first element from array
let removedNumber = numbers.shift();
console.log("After shift() - ", numbers);
console.log("Removed element: ", removedNumber);

let removedFruits = fruits.shift();
console.log("After shift() - ", fruits);
console.log("Removed Fruits: ", removedFruits);


// 4. unshift() - add elemnts to array in first ele
let addNumbers = numbers.unshift(80, 90);
console.log("After unshift() - ", numbers);

let addFruits = fruits.unshift("Pine-Apple", "Dragon");
console.log("After unshift() - ", fruits);



// 5. concat() - combine two or more arrays - same type
//  Syntax: arary.concat(arr1, arr2,...,arrn)

let combineNumbers = numbers.concat([100, 105], [245, 380, 26]);
console.log("After concat() - ", combineNumbers);

let combineFruits = fruits.concat(["Malta"], ["Tea", "Kodu"]);
console.log("After concat() - ", combineFruits);



// 6. slice(start index, ending index) - extract section from an array
let slicingNumber = numbers.slice(1, 3);
console.log(`After slicing() - ${slicingNumber}`);

let sliceFruits = fruits.slice(2, 7);
console.log(`After slicing() - ${sliceFruits}`);



// 7. splice() - add/remove elements wherevere you want
console.log("Fruits Array: ", fruits);

// ex-1 (delete elements)
let removedElemeants = fruits.splice(1, 2);
console.log("Updated Fruits Array: ", fruits); // [ 'Pine-Apple', 'Banana', 'Apple', 'Jack-Fruite', 'Lichi' ]
console.log("Splice elements Removed (1,2) - ", removedElemeants); //  [ 'Dragon', 'Mango' ]

// ex-2 (Adding elements)
fruits.splice(1, 0, "Kiwi", "Grape"); // adding elements from 1 index kiwi and grape - no deletion happen 
console.log("Splice elements added (1,0,Kiwi", "Grape) - ", fruits); //[ 'Pine-Apple', 'Kiwi', 'Grape', 'Banana', 'Apple', 'Jack-Fruite',  'Lichi']

//  ex-3 (delete and adding elements)
let removedSpliceFruits = fruits.splice(5, 1, "Mango", "Cheri");
console.log("FRuits Array: ", fruits);
console.log("Removed from array: ", removedSpliceFruits); // [ 'Jack-Fruite' ]



// 8. indexOf() - finds the index of an element; if element not found then return -1
// syntax: array.indexOf(searchEl) or array.indexOf(searchEl, starting index)

// ex-1
let mangoIndex = fruits.indexOf("Mango");
console.log("IndexOf - Array: ", mangoIndex); // find index of element

// ex-2
let notFound = fruits.indexOf("test");
console.log("Not Found: ", notFound); // not found -> -1

// ex-3
let elementSearch = fruits.indexOf("Lichi", 2);
console.log("Search from specific element: ", elementSearch);



// 9. includes() - check the element is present or not (return true/false)
let isAppleExist = fruits.includes("Apple");
console.log("isAppleExist: ", isAppleExist); // true

let isTestExist = fruits.includes("Test");
console.log("isTestExist: ", isTestExist); // false



// 10. toString() - converts array to string
console.log("Numbers: ", numbers);

let convertToString = numbers.toString();
console.log("After Converting to String - toString() - ", convertToString); // 80,90,20,30,40,50,60

let myArray:string[] = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];
console.log(myArray);

let conStr = myArray.toString();
console.log(conStr);