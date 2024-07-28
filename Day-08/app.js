// ES6+ Features
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let pName = "Adam";
let pAge = 21;
let pStr = `Person's name: ${pName} and his/her age is ${pAge}.`;
console.log(pStr);

// Task 2: Create a multi-line string using template literals and log it to the console.
let pStr1 = `Hey! My name is ${pName}.
I am ${pAge} years old.
Thank you...`;
console.log(pStr1);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr1 = [11,1,22,2,33,3];
let [arrOne, arrTwo] = arr1;
console.log("First: ",arrOne,", Second: ", arrTwo);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "JavaScript 2024",
    author: "Mark Marker",
    year: 2024,
}
let {title: bookName, author: writer} = book;
console.log("Title: ",bookName,", Author: ", writer);

// Activity 3: Spread and Rest operators.
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr2 = [2,4,6,8,10];
let additional = [12,14,16];
let arrModified = [...arr2, ...additional];
console.log(arrModified);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumNum(...taker) {
    let sum = 0;
    for (let item of taker) {
        sum += item;
    }
    return sum;
}
console.log(sumNum(1,2,3));

// Activity 4: Default Parameters
// Task 7: Write a function that takees two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a,b = 1) {
    return (a*b);
}
console.log(product(19));

// Activity 5: Enchanced object literals
// Task 8: Use enchanced object literals to create an object with methods and properties, and log the object to the console.
let user = {
    name: "Nobody",
    pass: 12345678,
    printer(){
        console.log(`User's name: ${this.name}, User's password: ${this.pass}`);
    }
}
user.printer();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let number = 'num';
let anyNum = {
    [number]: 10,
}
console.log(anyNum);