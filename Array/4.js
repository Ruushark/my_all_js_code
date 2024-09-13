// Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 197
// 168

const input=require("readline-sync");

let n = input.questionInt("Enter the number: ");
let a =[];
let i = 0;
let k = 0;
let j = 0;
while (i<n) {
    a[i] = input.questionInt("enter the element's of the array: ");
    i++
}
i = 0;
 while (i<n) {
    if (a[i]%2==0) {
        
        j=j+a[i];
    }
    else{
        k=k+a[i];
    }
    i++
 }
 console.log(j);
 console.log(k);
