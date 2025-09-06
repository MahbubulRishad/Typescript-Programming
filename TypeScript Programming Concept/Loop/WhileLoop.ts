// While loop: execute as long as the condition is true

// print 1-10 using while loop
let i: number = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// print 1-20 --> only even number
console.log("--print 1-20 --> only even number--");

let num: number = 1;

while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}

// decrement
console.log("--decrement--");

i = 10;

while (i >= 1){
    console.log(i);
    i--;
}