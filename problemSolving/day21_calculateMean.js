// Write a function called calculateMean that takes an array of numbers as input and returns the mean(average
// ) of  those numbers.

// In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a
// collection of numbers

// constraints
// The input array may contain positive and negative integers.
// The input array may be empty. If it is empty, the function should return 0

const calculateMean = (arr)=>{
    return (arr.length==0)?0:arr.reduce((accum,curelem)=>(accum+curelem/arr.length),0)
}



console.log(calculateMean([1,2,3,4,5])) ; //output: 3
console.log(calculateMean([10,20,30])) ; //output: 20
console.log(calculateMean([-1,0,1])) ; //output: 0
console.log(calculateMean([])) ; //output: 0
