/****  forEach(), map(), filter(), reduce(), some(), every() *****/

// forEach() - execute once for each array element
// it takes function as a parameter
// syntax: array.forEach(currentValue, index, array)

// 1. forEach() -  Get index of all the fruits along with the value 
// ex-1

let fruits: string[] = ["Apple", "Banana", "Mango", "Orange", "Kkiwi", "Papaiya"];
console.log("Fruits: ", fruits);

for (let i in fruits) {
    console.log(`Index: ${i} - Fruits: ${fruits[i]}`);
}

// Alternative - forEach()
console.log("ForEach Method - ");

fruits.forEach(function (index, element) {
    console.log(`${index} : ${element}`);
});


// Alternative - forEach()
console.log("ForEach Method arraw function - ");

fruits.forEach((index, element) => {
    console.log(`${index} : ${element}`);
});

// ex-2
fruits.forEach(function (element) {
    console.log(element.toUpperCase());
});



// 2. map() - creates new array with rge result of calling the function on every element of an array
// array.map(function(currentValue, index, array){})

let numbers: number[] = [2, 4, 6, 8, 10];

let SQnum = numbers.map(function (element) {
    return (element * element);
});

console.log(`Mapped Array`, SQnum);

// ex-2
// let number: number[] = [2, 4, 6, 8, 10];

let doubleNum = numbers.map(function (element) {
    return (element * 2);
});

console.log("Double Num: ", doubleNum);
console.log(`Double Num: ${doubleNum}`);



// 3. filter() - creates new array with all the elements that pass/satisfy the function

// ex-1
let arrayNum: number[] = [1, 2, 3, 4, 5, 9, 8, 10, 15, 16];

let evenArray = arrayNum.filter((element) => (element % 2 == 0));
console.log("Even Array after filter () - ", evenArray);

// ex-2
let conditionedArray = arrayNum.filter(function (element) {
    return (element >= 9);
});
console.log("Even Array after filter () - ", conditionedArray);



// 4. reduce() - array.reduce(function(accumulator, currentValue, index){}) - return a single value

let reduceArrayTotalValue = arrayNum.reduce((accumulator, currentValue) =>
    (accumulator = accumulator + currentValue), 1); // set accumulator value as 1

console.log("Reduce Method: ", reduceArrayTotalValue);



// 5. some() - checks if any elements satisfy the condition
let checkConditionArray: boolean = arrayNum.some((element) => element > 10); //true/false
console.log("Some method() - ", checkConditionArray);

let checkConditionArray2: boolean = arrayNum.some((element) => element > 16); //true/false
console.log("Some method() - ", checkConditionArray2);



// every() - checks if every elements satisfy the condition
let everyConditionArray: boolean = arrayNum.every((elements) => elements > 0);
console.log("Every method - ", everyConditionArray);

let everyConditionArrayfalse: boolean = arrayNum.every((elements) => elements > 2);
console.log("Every method - ", everyConditionArrayfalse);