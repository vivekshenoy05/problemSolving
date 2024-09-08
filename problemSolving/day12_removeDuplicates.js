// Write a function that takes an array of integers as input and removes
// any duplicate elements, returning a new array with only unique elements.

// Constraints

// The input array may contain positive and negative integers.
// The input array may be empty.
// The elements in the array are not guaranteed to be sorted.
// The output array should retain the original elements from the input array.

const removeDuplicates = (arr)=>{
    return [...new Set(arr)]
}

console.log(removeDuplicates([1,2,3,2,1,4]));//output: [1,2,3,4]
console.log(removeDuplicates([5,6,7,7,8,8,9]));//output: [5,6,7,8,9]
console.log(removeDuplicates([1,2,3,4])); // output: [1,2,3,4]
console.log(removeDuplicates([])); // output: []

//The new Set() method in JS creates a new Set Object. A set object is a 
// collection of uniqque values. It can store any type of value, whether primitive
// values or object references.

