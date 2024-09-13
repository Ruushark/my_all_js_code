// Write a program to take 3 numbers from the user and output the second max of 3 numbers.
// (First, do it in the normal way then do it by using 3 comparisons)

// Test Case1:
// Input:
// 5
// 4
// 6
// Output:
// 5



const input=require("readline-sync");
let A = input.questionInt("Enter First number: ");
let B = input.questionInt("Enter second number: ");
let C = input.questionInt("Enter thered number: ");
let max;
let min;

if (A>B) {
    max=A;
    min=B;
}

else{
    max=B;
    min=A;
}
if (max>C) {
    if (min>C) {
        console.log(min);
    }
    else{
        console.log(C);
    }
}
else{
    console.log(max);
}