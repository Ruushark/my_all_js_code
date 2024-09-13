// Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

// Test Case1:
// Input:
// 20
// 3
// 43
// Output:
// 43


const input=require("readline-sync");
let a = input.questionInt("Enter the fist number: ");
let b = input.questionInt("Enter the second number: ");
let c = input.questionInt("Enter the thrad number: ");

if (a>b) {
    if (a>c) {
        console.log(a);
    }
    else{
        console.log(c);
    }
}
else if (b>c) {
    console.log(b);
}
else{
    console.log(c);
}