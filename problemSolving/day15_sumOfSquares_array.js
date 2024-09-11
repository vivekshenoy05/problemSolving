// Write a function to calculate the sum of squares of all elements in an array>
// For ex given the array [1,2,3], the function should return 1*1 + 2*2 +3*3 = 1+4+9 = 14;


const sumOfSquares =(arr)=>{
    let res = arr.reduce((accum,elem)=>{
        return accum+elem*elem;
    },0);
    return res;
}


console.log(sumOfSquares([1,2,3])) //output 14

// method two

const sumOfSquares1 = (arr)=>{
    let sum =0;
    for(elem of arr){
        sum = sum + elem*elem;
    }
    return sum
}


console.log(sumOfSquares1([1,2,3]));
