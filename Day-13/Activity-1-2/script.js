// Task 1: Create a module that exports a function to add two numbers. import and use this module in another script.
export let task1 = (a, b) => {
    return a+b;
}
// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export let person = {
    name: "Raju",
    from: "DholakPur",
    rollNum: 121,
    printName: function() {
        console.log(`${this.name} is from ${this.from}`);
    }
}
// Task 3
export function talk() {
    console.log("Good Morning!!");
}
export function talk1() {
    console.log("Nice to meet you.");
}

export default function task4(num) {
    for (let index = 1; index < 11; index++) {
        console.log(index*num);
    }
}

