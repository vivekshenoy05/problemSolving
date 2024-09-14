// Write a function to check if a character is uppercase or lowercase

// The input char will be a single character.
// The character can be any printable ASCII character.
// You can assume that the input will always be astring of length 1.

// method1
const isUpperCase = (char)=>{
    return char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90 ? true : false;
}

const isUpperCase1 = (char)=>{
    return char.toUpperCase() === char;
}

const isLowerCase = (char)=>{
    return char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122 ? true : false;
}

console.log(isUpperCase('S'));//true
console.log(isUpperCase('Z'));//true
console.log(isUpperCase('c'));//false
console.log(isUpperCase1('S'));//true
console.log(isUpperCase1('Z'));//true
console.log(isUpperCase1('c'));//false


console.log(isLowerCase('c'));//true
console.log(isLowerCase('C'));//false






// console.log(isLowerCase('b'));

// note
// Ensure that the function correctly identifies uppercase characters based on their ASCII
// Otimize the function to hangle edge case efficiently.