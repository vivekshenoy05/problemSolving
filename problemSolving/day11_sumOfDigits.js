// Write a function that takes a number as input and returns the sum of its digit


const sumOfDigits = (num)=>{
    let splittedNum = Array.from(String(num),Number)
    console.log(splittedNum)
    return splittedNum.reduce((curElem,accum)=>curElem+=accum)
}



console.log(sumOfDigits(1234));// output 10
console.log(sumOfDigits(4321));// output 10
console.log(sumOfDigits(123456));// output 21

// constraints:
// The input number will always be a positive integer.
// The input number can have multiple digits.
// The output should be the sum of all the digits in the input number.


//We can even solve the above problem without converting number into string

const sumOfDigits1 = (num)=>{
    let sum =0;
    let temp;
    while (num>0){
        temp = num%10;
        sum+=temp
        num = Math.floor(num/10)
    }
    return sum;
}



console.log(sumOfDigits1(1234));// output 10
console.log(sumOfDigits1(4321));// output 10
console.log(sumOfDigits1(123456));// output 21