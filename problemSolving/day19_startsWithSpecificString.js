//Write a function to check if a given string strats with a specific substring

// str: A string (eg : "Hello World")
// subStr: A substring to check if it starts with the given string (eg: Hello)
//Output: true if the given string starts with the specified substring, otherwise false.

//method1
const startsWith  = (str,substr) =>{
    return str.toLowerCase().startsWith(substr);
}

//method2

const startsWith1 = (str,substr)=>{
    return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase()
}

console.log(startsWith("Hello world", 'hello'));//true
console.log(startsWith("Hello world", 'world'));//false


console.log(startsWith1("Hello world", 'hello'));//true
console.log(startsWith1("Hello world", 'world'));//false