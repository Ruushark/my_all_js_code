// Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

// Test Case:
// Input:
// 5
// Output:
// 10

// Test Case:
// Input:
// 6
// Output:
// 6



const input=require("readline-sync");
let a = input.questionInt("Enter the number: ");

if (a%2==0) {
    console.log(a);
}
else{
    console.log(a*2);
}