// Challenge: Calculate the average

// Write a function called calculateAverage that takes an array
// of numbers as input and returns the average of those numbers.

// Your funcion should:

//Accept an array of nmbers as input.
// Calculate the sum of all numbers in the array.
// Divide the sum by the total numbers of elements in the array
// to find the average.
// return the calculated average


const calculateAverage = (arr)=>{
    const total = arr.reduce((accum,currElem)=> accum+currElem)
    return total/arr.length
}


console.log(calculateAverage([5,10,2,8])); //output 6.25
console.log(calculateAverage([5,5,5,5])); 

