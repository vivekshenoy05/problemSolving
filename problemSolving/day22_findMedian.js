// Write a function findMedian(arr) that takes an array of numbers as input and returns the
// median value. If the array has an even number of elements, return the average of the two middle values.

// for ex, the median of 3,3,5,9,15 is 5. if there is an even number of observations, then there is no single middle value;
// the median is then usually defined to be the mean of two middle values: so median of 3,5,7,9 is (5+7)/2 =6;

// toDo
//  sort the array in ascending order
//  if the array has an odd number of elements, the median is the middle element.
//  if the array has an even number of elements, the median is the average of the two middle elements.


const findMedian = (arr)=>{
    // step1: sort the array
    arr.sort((a,b)=>a-b);
    // console.log(arr)
    // step2: check if the array length is odd or even
    length = arr.length;
    let mid = Math.floor(length/2);
    // console.log(mid)
    if(length%2 === 0){
        median = (arr[mid]+arr[mid-1])/2;
    }else{
        // console.log(arr[mid])
        median = arr[mid]
    }
    return median;
    // step3: for even length array
    // step4: for odd length array
}

console.log(findMedian([5,3,9,1,7])); //output:5
console.log(findMedian([2,4,6,8])); //output:5 
console.log(findMedian([1,3,5,7,9,11])); //output:6
