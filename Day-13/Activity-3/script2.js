// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const a = 2;
const b = 4;
const c = 6;
function print() {
    console.log("Monday");
}
function randomNum() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

module.exports = {
    a,
    b,
    c,
    print,
    randomNum
}