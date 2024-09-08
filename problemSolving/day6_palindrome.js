// Write a function to determine whether a given string is palindrome or not. A palindrome is a word, phrase, number
// or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuations and capitalization.

//Constraints:

// The input string may contain letters,digits, spaces, puntuation and special characters
// The function should be case sensitive, meaning "Racecar" and "racecar" should be considered the same.
// Ignore spaces,puntuation and special characters when determining if a string is a palindrome.
// The function should return true if the input string is a palindrome and false otherwise

const isPalindrome = (str)=>{
    str = str.toLowerCase().replace(/\W/g,"");
    reverseStr = str.split("").reverse().join("");
    console.log(reverseStr);
    return (str === reverseStr)?true:false;
}

console.log(isPalindrome('A man, a plan, a canal, panama'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));


//Note
// .replace(/\W/g, "") : Uses replace() method wwith a regular expression (/\W/g) to remove all non-word characters
// from a string. Here:
// \W matches any non-word character (equivalent to [^a-zA-Z0-9_])
// The g flag performs a global search, meaning it replaces all occurances of non-word characters in the string.
// So, replace(/\W/g, "") replaces all non-word characters with an empty string,effectively removing them from the string.