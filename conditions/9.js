// Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances. The gross salary includes the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary based on the employee's basic salary range.

// Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// Tips:

// 1. Understand the different allowance percentages based on the employee's basic salary range.
// 2. Pay attention to how the gross salary is calculated by adding the basic salary, HRA, and DA.
// 3. Ensure accuracy in calculations and handle different basic salary scenarios effectively.


// Test Case1:
// Input:
// 17000
// Output:
// 36550
// Explanation:
// Since the basic salary lies in the bracket 10000 <= basic salary <= 20000, the HRA equals 25% of the salary = 4250, and the DRA equals 90% of the basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550

const input=require("readline-sync");
let bs=input.questionInt("Enter basic salary = ");
let gs;

if(bs<= 10000){
    gs=bs+0.2*bs+ 0.8*bs;
    console.log(gs);
}
else if(bs<=20000){
    gs=bs+0.25*bs+0.9*bs;
    console.log(gs);
}
else{
    gs=bs+0.3*bs+0.95*bs;
    console.log(gs);
}