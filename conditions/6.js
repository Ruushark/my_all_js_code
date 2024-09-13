// Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

// Test Case1:
// Input:
// 98
// 13
// 29
// 58
// Output:
// 98



const input=require("readline-sync");
let a = input.questionInt("Enter the fist number: ");
let b = input.questionInt("Enter the second number: ");
let c = input.questionInt("Enter the thrad number: ");
let d = input.questionInt("Enter the forth number: ")

let greater = a;
if (b > greater) {
    greater = b;

}

if (c > greater) {
    greater = c;

}

if (d > greater) {
    greater = d;

}

console.log(greater);