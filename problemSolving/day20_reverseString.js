// Write a function to reverse a string without using any builtin method or libraries. The function should take a string and return the reversed string

const reverseString = (str)=>{
    let finalstr = '';
    for(let i = str.length-1; i>=0 ;i--){
        finalstr = finalstr + str[i];
    }
    return finalstr;
}


console.log(reverseString('hello')); // output: olleh
