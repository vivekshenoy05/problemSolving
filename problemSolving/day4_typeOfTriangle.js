// Write a function called checkTriangle that takes three parameters representing the lengths of thr sides of the triangle.
// The function should return a string indicating the type of triangle: 'equilateral','isosceles', or 'scalene'.

//todo the function should adhere to the following rules:
//If all three sides are of equal length, return "equilateral"
//If only two sides are of equal length, return "isosceles"
//If all the three sides have different length, return "scalene"

const checkTriangleType = (a,b,c)=>{
   return ((a===b)&&(b===c))? 'equilateral' : ((a===b)|| (b===c)||(c==a))?'isosceles':'scalene'
}

console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,7,3));
console.log(checkTriangleType(3,0,8));
