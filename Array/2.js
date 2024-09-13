// // Write a program to reverse the array and print the reversed array.

// // Test Case1:
// // Input:
// // 23 45 32 25 46 33 71 90
// // Output:
// // 90
// // 71
// // 33
// // 46
// // 25
// // 32
// // 45
// // 23

const input=require("readline-sync");

let a = [];
let i = 0;
let n = input.questionInt("enter the length = ");

// for (let i = 0; i < n; i++){

//     a[i] = input.questionInt("enter the elements of array = ")
// }



// for ( i = n-1; i >=0; i--){

//     console.log(a[i]);
// }

while (i<n) {
    a[i] = input.questionInt("Enter the element of array: ");
    i++;
}