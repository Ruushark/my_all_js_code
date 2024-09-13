// Write a program to take two numbers from the user and determine the greater of those two given numbers.

// Test Case1:
// Input:
// 20
// 3
// Output:
// 20


const input=require("readline-sync");
let a = input.questionInt("Enter First number: ");
let b = input.questionInt("Enter Second number: ");

if (a>b) {
    console.log(a);
}
else{
    console.log(b);
}