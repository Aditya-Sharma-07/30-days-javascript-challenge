// Activty 3: Importing entire modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
let task5 = require("./script2.js")
console.log(task5.a);
console.log(task5.c);
task5.randomNum;