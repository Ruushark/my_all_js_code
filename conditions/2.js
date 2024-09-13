// Write a program to take a number from the user and print that number as Odd or Even.

// Test Case1:
// Input:
// 56
// Output:
// Even


const input=require("readline-sync");
let a = input.questionInt("Enter First number: ");

if (a%2) {
    console.log("Even");
}

else{
    console.log("odd");
}