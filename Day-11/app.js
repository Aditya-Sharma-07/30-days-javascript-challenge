// Promises and async/await
// Activity 1 : Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your promise is resolved.");
        }, 2000);
    })
}
task1()
    .then((response) => {
        console.log(response);
    })
// // Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle with error using '.catch'.
function task2() {
    return new Promise((response, reject) => {
        setTimeout(() => {
            reject("Your promise is rejected");
        }, 2000);
    })
}
task2()
    .catch((error) => {
        console.log(error);
    })

// Activity 2 : Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function randomNum() {
    let num = Math.floor(Math.random() * 10) + 1;
    return num;
}
function task3() {
    return new Promise((resolve, reject) => {
        let number = randomNum();
        if (number > 2) {
            resolve("Congrats!! Your promise has been resolved.");
        } else {
            reject("oops!! You caught an error");
        }
    })
}
let counter = 0;
task3()
    .then(() => {
        counter++; 
        console.log(`Promise ${counter} has been resolved successfully.`);
        return task3(); 
    })
    .then(() => {
        counter++; 
        console.log(`Promise ${counter} has been resolved successfully.`);
        return task3(); 
    })
    .then(() => {
        counter++; 
        console.log(`Promise ${counter} has been resolved successfully.`);
        return task3(); 
    })
    .then(() => {
        counter++; 
        console.log(`Promise ${counter} has been resolved successfully.`);
        return task3(); 
    })
    .catch((error) => {
        counter++;
        console.log(error,` on Promise ${counter}`); 
    })

// Activity 3 : Using Async/Await
// Task 4: Write an async function that waits for a promises to resolve and then logs the resolved value.
async function task4() {
    let promise1 = new Promise((resolve, reject) => {
        resolve("Promise resolved!!");
    })
    let res = await promise1;
    console.log(res);
}
task4()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function task5() {
    let promise2 = new Promise((resolve, reject) => {
        reject("oops!! you got an error");
    })
    try {
        let res = await promise2;
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
task5();

// Activity 4 : Fetching data from an API
// Task 6: Use the 'fetch API' to get data from a public API and log the response data to console using promises.
let url = "https://catfact.ninja/fact";
fetch(url)
.then((res) => {
    return res.json();
})
.then((data) =>{
    console.log(data.fact);
})
.catch((err) => {console.log(err);})

// Task 7: Use the 'fetch API' to get data from a public API and log the response data to console using async/await.
async function task7() {
    let url = "https://catfact.ninja/fact";
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (error) {
        console.log(error);
    }
}
task7();
// Activity 5 : Concurrent Promises
// Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values.
let pro1 = new Promise((resolve, reject) => {
    resolve("Hello");
})
let pro2 = new Promise((resolve, reject) => {
    resolve("Good Evening");
})
let pro3 = new Promise((resolve, reject) => {
    resolve("Good Day");
})
Promise.all([pro1, pro2, pro3])
.then((val) => {console.log(val);})

// Task 9: Use 'promise.race' to log the values of first promise that resolves among multiple promises.
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Code");
    }, 400);
})
let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Chai");
    }, 200);
})
Promise.race([prom1, prom2])
.then((val) => {console.log(val);})