// 1
let Num = 101;
let Str = "JavaScript";
let Guess = true;
let obj = {
    name: "Jon",
    profession: "Scientist"
};
let arr = [0,"a","b"];

console.log(`${Num} ${typeof Num}`);
console.log(`${Str} ${typeof Str}`);
console.log(`${Guess} ${typeof Guess}`);
console.log(`${obj} ${typeof obj}`);
console.log(`${arr} ${typeof arr}`);

// 2
// let can be reassigned
let a;
a = 4;
// but not possible in case of const , it must be assigned at the time of declaration
// const b; // error
