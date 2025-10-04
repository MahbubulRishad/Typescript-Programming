
export let appName = "Calculator"; // export variable


// export function
export function add(a: number, b: number): number {
    return (a + b);
}


// export class
export class Print {
    printInfo(): void {
        console.log("Hello");
    }

    convertUpperCase(str:string): string {
        return str.toUpperCase();
     }
}

