// Write a program to calculate the factorial of a number using a do while loop.
let fac = 1;
let number = 5;
do {
    fac = number*fac;
    number--;
} while (number > 1);
console.log(fac);