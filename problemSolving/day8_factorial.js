//Factorial finder

// Write a function that takes a non-negeative interger num as input and returns
// its factorial. The factorial of a non-negative integer n,denoted as n!, is the product of all positive integers less than
// or equal to n. The factorial of 0 is denoted as 1.

// Here are some examples of factorial calculations:

// factorial(0)=1
// factorial(1)=1
// factorial(2)=2
// factorial(3)=6
// factorial(4)=24


//  your program should work for any non-negative integer input

const factorial = (n) =>{
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
