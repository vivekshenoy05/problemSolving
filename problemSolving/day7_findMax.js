//Write a function that takes an array of numbers as input and returns the maximum number in the array.

const findMax = (arr)=>{
    return Math.max(...arr);
}

console.log(findMax([1,4,6,7,9,2]));
console.log(findMax([-1,-4,-6,-7,-9,-2]));
console.log(findMax([1]));
