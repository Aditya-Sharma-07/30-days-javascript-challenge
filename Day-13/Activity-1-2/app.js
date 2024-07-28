// Modules
// Activity 1: Creating and exporting modules
// Task 1: Create a module that exports a function to add two numbers. import and use this module in another script.
import {task1} from "./script.js";
console.log(task1(2, 6));
// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import {person} from "./script.js";
person.printName();

// Activity 2: Named and default exports
// Task 3:  Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import {talk, talk1} from "./script.js";
talk();
talk1();

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import table from "./script.js";
table(7);