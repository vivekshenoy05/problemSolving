// Write a function to sort an array of numbers in an ascending order.

//example:
//console.log(sortAscending([5,3,10,8])); output: [1,3,4,8]

//todo requirements:
// The function should take an array of numbers as input.
// it should return a new array with the numbers sorted in ascending order.
// The original array should remain unchanged.
// You are not allowed to use the built-in sort() method.

const sortAscending = (arr) =>{
    result = arr.sort((a,b)=>a-b)
    return result;
}

console.log(sortAscending([5,3,10,8]));
console.log(sortAscending([5,3,189,8]));

