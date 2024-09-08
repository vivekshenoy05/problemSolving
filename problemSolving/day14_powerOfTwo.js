// Write a function called isPowerOfTwo that takes an integer num as input
// and returns true if num is a power of two, and false otherwise.

//The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should rreturn true if the given number is power of 2, and
// false otherwise

const isPowerOfTwo = (num)=>{
    let op = false;
    for (let i =1;i<num-1;i++){
        if(2**i === num){
            op =  true;
        }
    }
    return op;
}

console.log(isPowerOfTwo(8)); //true
console.log(isPowerOfTwo(7)); //false
