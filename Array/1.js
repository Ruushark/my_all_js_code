// Write a program to print all the numbers from the given array using a loop.
// L = {23, 45, 32, 25, 46,33, 71, 90}

// Output:
// 23
// 45
// 32
// 25
// 46
// 33
// 71
// 90


const input=require("readline-sync");

let a = [];

let n = input.questionInt("enter the length = ");

for (let i = 0; i < n; i++){

    a[i] = input.questionInt("enter the elements of array = ")
}

for ( i = 0; i < n; i++){

    console.log(a[i]);
}