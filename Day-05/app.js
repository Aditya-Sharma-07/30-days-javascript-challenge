// Functions

// Activity 1 : Function declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checker(num) {
    if (num % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}
checker(5);
// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return (num ** 2);
}
console.log(square(5));

// Activity 2: Function expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log(`Both numbers are equal and their value is ${num1}`);
    }
}
max(1, 2);

// Task 4: Write a function expression to concatenate two strings and return the result.
const concat = function (str1, str2) {
    return str1.concat(str2);
}
console.log(concat("adi", "tya"));


// Activity 3: Arrow functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumFinder = (a, b) => a + b;
console.log(sumFinder(10, 3));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const specificFinder = (a, b) => {
    return a.includes(b);
};
console.log(specificFinder("chaiAurCode", "r"));


// Activity 4: Function parameters and default values
// Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(a, b = 1) {
    return a * b;
}
console.log(product(3));

// Task 8 : Write a function that takes person's name and age and returns a greeting message. Provide a default value for the age.
function greet(Name, age = 1) {
    return `Congratulations!! ${Name}, you're ${age} years old.`;
}
console.log(greet("Raju", 2));

// Activity 5: Higher-Order functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function logger(func1, times) {
    for (let index = 0; index < times; index++) {
        func1();
    }
}
logger(() => { console.log("Hello world!!") }, 5);
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function apply(func1, func2, value) {
    console.log(func2(func1(value)));
}
apply((num) => { return num ** 2 }, (num) => { return num ** 2 }, 5);