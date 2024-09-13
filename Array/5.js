const input=require("readline-sync");
let n = input.questionInt("Enter the size of the array:");
let a = [];
let s = "";
let i =0;

while (i<n) {
    a[i] = input.questionInt("Enter the element of the array:");
    i++;
}
i=0;
while (n>i) {
    k=0;
    while (a[i]>k) {
        s += "<";
        k++;
    }
    s+="\n";
    i++;
}
console.log(s);