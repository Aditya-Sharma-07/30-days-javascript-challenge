// Activity 3: Array methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newArr = arr.map((e) => {
    return e*2;
});
console.log(newArr);
// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenArr = arr.filter(e => e%2==0);
console.log(evenArr);
// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = evenArr.reduce((accu, e) => accu+e);
console.log(sum);