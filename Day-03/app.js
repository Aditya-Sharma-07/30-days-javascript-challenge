// Activity 1
let num = 100;

if (num > 0) {
    console.log(`${num} is positive number.`);
}
else if (num < 0) {
    console.log(`${num} is negative number.`);
}
else {
    console.log(`Number is zero.`);
}

let age = 100;

if (age >= 18) {
    console.log(`You can vote.`);
}
else {
    console.log(`You  are not eligible to vote.`);
}

// Activity 2
let num1 = 2;
let num2 = 3;
let num3 = 5;

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest number`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the largest number`);
} else if (num3 >= num1 && num3 >= num2) {
    console.log(`${num3} is the largest number`);
}

// Activity 3
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter valid number.");
        break;
}

let grade;
let score = 18;
let assigner = () => {
    switch (score) {
        case score >= 85:
            grade = 'A';
            break;
        case score >= 65:
            grade = 'B';
            break;
        case score >= 50:
            grade = 'C';
            break;
        case score >= 33:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
}
assigner();
console.log(`Your grade is ${grade}`);

// Activity 4
let toBeChecked = 19;
toBeChecked % 2 == 0 ? console.log("Even Number"):console.log("Odd Number");

// Activity 5
let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} is leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}