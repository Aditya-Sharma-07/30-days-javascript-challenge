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
