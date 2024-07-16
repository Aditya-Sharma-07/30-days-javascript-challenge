// Activity 1 : For loop
// Task 1 : Write a program to print numbers from 1 to 10 using a for loop.
for(let i = 1;i < 11; i++){
    console.log(i);
}

// Task 2 : Write a program to print the multiplication table of 5 using a for loop.
for(let i = 1;i < 11; i++){
    console.log(5*i);
}

// Activity 2 : While loop
// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while(i < 11){
    sum += i;
    i++;
}
console.log(sum);

// Task 4 : Write a program to print numbers from 10 to 1 using a while loop.
let index = 10;
while (index > 0) {
    console.log(index);
    index--;
}

// Activity 3 : Do While loop
// Task 5 : Write a program to print numbers from 1 to 5 using a do while loop.
let ind = 1;
do{
    console.log(ind);
    ind++;
} while(ind < 6);

// Task 6 : Write a program to calculate the factorial of a number using a do while loop.
let fac = 1;
let number = 5;
do {
    fac = number*fac;
    number--;
} while (number > 1);
console.log(fac);

// Activity 4 : Nested loop
// Task 7 : Write a program to print a pattern using nested for loops. Like this :
// *
// **
// ***
// ****
// *****
let row = 5;
let col = 5;
for (let i = 0; i < row; i++) {
    let holder = "";
    for (let j = 0; j < col; j++) {
        if(j <= i){
            holder += "*";
        }
    }
    console.log(holder);
}

// Activity 5 : Loop Control statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let index = 1; index < 11; index++) {
    if (index == 5) {
        continue;
    }
    console.log(index);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let index = 1; index < 11; index++) {
    if (index == 7) {
        break;
    }
    console.log(index);
}