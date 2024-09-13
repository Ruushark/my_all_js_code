// Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity, and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed, along with an additional surcharge.

// Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// Tips:

// 1. Understand how the bill amount varies for different ranges of units consumed.
// 2. Pay attention to adding the surcharge correctly to the total bill amount.
// 3. Ensure accuracy in calculations and handle different scenarios effectively.



const input= require("readline-sync");
let U = input.questionInt("Enter charge: ")
let E,F,A,B,C;

if(U<=50){
    E=U*0.5;
    F=E+E*0.2;
    console.log(F);
}
else if(U<=150){
    A=U-50;
    E=50*0.57+A*0.75;
    F=E+E*0.2;
    console.log(F);
}
else if(U<=250){
    B=U-150;
    E=50*0.5+100*0.75+B*1.20;
    F=E+E*0.2;
    console.log(F);
}
else{
    C= U-250;
    E= 50*0.5+100*0.75+100*1.20+C*1.50;
    F=E+E*0.2;
    console.log(F);
}



































































