// super () - invoke parent class constructor
// super - invoke immediate parent class method
// supper - unable to used to invoke parent properties


class Parent {
    num: number = 10;

    constructor() {
        console.log("Constructor: Parent");
    }

    display() {
        console.log("Method display() from parent");
    }
}


class Child extends Parent {
    num: number = 20; // properties overriden

    constructor() {
        super(); // must invoked the parent constructor
        console.log("Constructor: Child");
    }

    show() {
        console.log("Num: ", this.num); // overriden 
        // console.log("Num: ", super.num); // not supported in typescript
        console.log("Method show() from child");
    }

    display() {
        super.display(); // this will invoke parent class method
        console.log("Method display() from child");
    }
}


let c1 = new Child();
c1.show();
c1.display(); // from child class