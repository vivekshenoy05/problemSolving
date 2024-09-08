//Hastag generator

//? You are required to implement a function generateHash that generates a hash tag from a given string.
// The hash tag should be constructed as follows:

//The input string should be converted to a hash tag format, where each word is capitalized and concatenated together
//without whitespaces.
// If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace
//the function should return false.

//otherwise, the function should return the generated has tag prefixed with #.

// write a function generateHash to accomplish this task.

const generateHash = (str) =>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    letters = str.split(' ');
    console.log('splitters sentence', letters);
    const response = letters.map((elem)=>elem[0].toUpperCase() + elem.slice(1));
    console.log('response',response);
    return `#${response.join('')}`
}

console.log(generateHash('my name is vivek shenoy'));

//second solution

const generateHash1 = (str) =>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    letters = str.split(' ');
    console.log('splitters sentence', letters);
    const response = letters.map((elem)=>elem.replace(elem[0],elem[0].toUpperCase()));
    console.log('response',response);
    return `#${response.join('')}`
}

console.log(generateHash1('my name is vivek shenoy y'));

//third solution

const generateHash2 = (str) =>{
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    letters = str.split(' ');
    console.log('splitters sentence', letters);
    const response = letters.map((elem)=>elem.charAt(0).toUpperCase() + elem.slice(1));
    console.log('response',response);
    return `#${response.join('')}`
}

console.log(generateHash2('my name is vivek shenoy y from udupi'));