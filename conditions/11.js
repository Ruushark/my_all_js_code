// Write a program to take 4 numbers from the user and output the third max of these 4 numbers.

// Test Case1:
// Input:
// 5
// 4
// 6
// 7
// Output:
// 5

const input=require("readline-sync");
let a=input.questionInt("Enter a number:");
let b=input.questionInt("Enter a number:");
let c=input.questionInt("Enter a number:");
let d=input.questionInt("Enter a number:");

let max1, smax1, max2, smax2;
if(a>b){
    max1=a;
    smax1=b;
}
else{
    max1=b;
    smax1=a;  
}

if(c>d){
    max2=c;
    smax2=d;
}
else{
    max2=d;
    smax2=c;  
}
if(max1>max2){
    if(max2>smax1){
        if(smax2>smax1){
            console.log(smax2);
             }
    
            else{
            console.log(smax1);
            }
    }
    else {

        console.log(max2);
    }
}
else{
    if(max1>smax2){
        if(smax2>smax1){
            console.log(smax2);
        }
        else{
            console.log(smax1);
        }
    }
    else{
        console.log(max1);
    }
}
