//8. WAP to print Fibonacci series without recursion.

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

let n=10
let a=0
let b=1
let c=0
let print=" "
for(let i=0;i<n;i++){
    c=a+b  //1+2
    print +=" "+c
    a=b  //2
    b=c  //3
}

console.log(print)