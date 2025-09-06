// typically used when the number of iterations is known beforehand

// print 1-10

for (let i: number = 0; i <= 10; i++) {
    console.log("N:", i);
}


// print even num 1-20
console.log("--print even num 1-20--");

for (let i: number = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even:", i);
    }
}


for (let i: number = 10; i > 0; i--) {
    console.log("Decrement:", i);
}


// break
console.log("--break--");

for (let i: number = 0; i <= 50; i++) {
    if (i==15){
        break;
    }
    console.log("Continue:", i);
}


// continue
console.log("--continue--");

for (let i: number = 0; i <= 50; i++) {
    if (i==15 || i== 25 || i==35 || i==45){
        continue;
    }
    console.log("Continue:", i);
}