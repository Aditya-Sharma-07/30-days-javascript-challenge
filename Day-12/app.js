// Error handling
// Activity 1: Basic error handling with try catch
// Task 1: Write s function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to  the console.
function task1() {
    try {
        throw('Invalid code to perform execution to code.')
    } catch (error) {
        console.log(error);
    }
}
task1();

// Task 2: Create a func that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function task2(num1, num2) {
    if (num2 == 0){
        try {  
            throw('Denominator is zero');
        } catch (error) {
            console.log(error);
        }
    } else {
        return num1/num2;
    }
}
task2(4,0);

// Activity 2: Finally Block
//Task 3: Write a script that includes a try catch block and a finally block, log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    hello(console.log);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("JavaScript");
}

// Activity 3: Custom error objects
// Task 4: Create a custom error class that extends the built-in error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class customErr extends Error{
    constructor(message, name){
        super(message);
        this.name = name;
    }
}
function throwsErr() {
    throw new customErr("oops error coming.","errCustom1");
}
try {
    throwsErr();
} catch (error) {
    if (error instanceof customErr) {
        console.log("Custom error, ",error.message);
    } else {
        console.log("Not a custom error, ",error.message);
    }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function checker(input) {
    if (input != "") {
        console.log("User validated");
    } else {
        try {
            throw new customErr("Invalid input.","userError");
        } catch (error) {
                console.log("User error, ",error.message);
    }
}
}
checker("");
// Activity 4: Error handling in promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
let prom = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10 ) + 1;
    if (num > 3) {
        resolve("Its accepted.");
    } else {
        reject("Its rejected");
    }
})
prom
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// Task 7: Use try-catch with an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function task7() {
    try {
        let prom = new Promise((resolve, reject) => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 3) {
                resolve("It's accepted.");
            } else {
                reject("It's rejected.");
            }
        });
        let accept = await prom;
        console.log(accept);
    } catch (error) {
        console.log(error);
    }
    
}
task7();

// Activity 5: Graceful error handling in fetch
// Task 8: Use the fetch API to request data from an invalid url and handle the error using .catch().Log an appropriate error message to the console.
let url = "https:/invalid";
fetch(url)
.catch((err) => {console.log(err.message);})

// Task 9: Use the fetch API to request data from an invalid url within an async function and handle the error using .catch().Log an appropriate error message to the console.
async function task9() {
    let url = "http:/joke";
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
task9();