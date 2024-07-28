// Write a program to print a pattern using nested for loops. Like this :
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
