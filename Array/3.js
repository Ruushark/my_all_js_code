// // Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

// // Test Case1:
// // Input:
// // 7
// // 1 2 3 4 5 6 7
// // 3
// // Output:
// // Yes

// // Test Case2:
// // Input:
// // 8
// // Output:
// // No

const input = require("readline-sync");

let a = [];
let n = input.questionInt("Enter the length of the array: ");


for (let i = 0; i < n; i++) {
    a[i] = input.questionInt(`Enter element  of the array: `);
}

let target = input.questionInt("Enter the target number: ");
let found = false;
for (let i = 0; i < n; i++) {
    if (a[i] === target) {
        found = true;
        break;
    }
}
if (found) {
    console.log("Yes");
} else {
    console.log("No");
}