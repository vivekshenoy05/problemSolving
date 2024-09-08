// Count the occurrences of characters

//write a function called countChar that takes two parameters: a string and a character to count
//The function should return the number of times the specified character appers in the string.

// todo constraints:
// the function should handle both lowercase and uppercase characters.
// The character parameters can be any printable ASCII character (the function should accept any character
// that is part of ASCII character set and its printable)

const countChar = (str, char)=>{
    let words = str.toLowerCase();
    let letter = char.toLowerCase();

    totalCount = words.split('').reduce((accum, currentChar)=>{
        // console.log('accum',accum);
        // console.log('currentChar',currentChar)
        if(currentChar === letter){
            accum++;
        }
        // return accum;
    },0);
    console.log('gbyhugdscy7u',totalCount)
    return totalCount;
}

console.log(countChar('MissIssippi','i'));