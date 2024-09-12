// write a function findMin that takes an array of numbers as input and returns the minimum value
// fount in the array

// constraints
// the input array may contain both positive and negative integers
// The input array may be empty
// The input array may contain duplicate values

const findMin = (arr)=>{
    let sorted =  arr.sort((a,b)=>{
        if(a<b){
            return -1; // -l means ascending
        }
    })
    return sorted[0]
}


console.log(findMin([5,10,2,8])); //Output: 2
console.log(findMin([5,-3,0,12,-7])); //Output: -7
console.log(findMin([]));//Output: undefined or any auitable message of empty array

// method 2

const findMin1 = (arr)=>{
   return arr.length ===0 ? 'array is empty':
     Math.min(...arr);
}

console.log(findMin1([5,10,2,8])); //Output: 2
console.log(findMin1([5,-3,0,12,-7])); //Output: 7
console.log(findMin1([]));//Output: undefined or any auitable message of empty array
