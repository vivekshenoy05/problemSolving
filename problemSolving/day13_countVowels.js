//  Write a function that takes a string as input and returns the count of vowels in that string
// Consider "a",'e',i,o,u  as vowels. (both lowercase and uppercase)

//constraint

// The input string may contain letters in both uppercase and lowercase
// The output should be a non-negative integer representing the count of
// vowels in the string

const countVowels = (str)=>{
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    let arr = str.split('');

    for(let char of arr){
        	if(vowels.includes(char.toLowerCase())){
                count++;
            }
    }
    return count;
    

}

console.log(countVowels('Helloo world'));//output: 3
console.log(countVowels('The quIck brOwn FOx'));//output: 5
console.log(countVowels('Brrrp'));//Output:0
