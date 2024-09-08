//*-----------------------------------------------
// LONGEST WORD IN A STRING
//*-----------------------------------------------

// Write a function findLongestWord that takes string as input and returns the longest word in the string. If there
// are multiple longest words return the first one encountred

// Constraints
//? The input string may contain alphabetic characters,digits,spaces, and puntuations.
//? The input string is non-empty
//? The input string may contain multiple words seperated by spaces

//*Note:
//? If the input string is empty or contains only whiteSpace, the function return a false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

//Trim() method is used to remove whitespace at the begining and end of the string


const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    // strArr = str.split(''); know the difference
    words = str.split(' ');
    // console.log(words);

    // lets sort
    words = words.sort(); //here sorting is done based on UNICODE VALUES capital letter has less value compared to samall
    console.log(words);  
    words = words.sort((a,b)=>a.length-b.length)
    console.log(words); 
    return words.at(-1)

}

//second solution

const secondSolution = (str)=>{
    if(str.trim().length === 0){
        return false;
    }

    words = str.split(' ');
    response = words.reduce((currElem,accum)=>(currElem.length>accum.length)?currElem:accum);
    return response;
}
console.log(findLongestWord('Watch vivek doing coding ehhhhhhhhhhhh234'));

//second solution
console.log(secondSolution('hello vivek learn skill fastttttttttt'));
