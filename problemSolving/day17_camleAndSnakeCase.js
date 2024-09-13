// Write a function to convert a string to camelCase and snake_case


const toCamelCase = (str)=>{
    str = str.trim().split(' ');

    str = str.map((elem,index)=>{
        if(index===0){
            return elem.toLowerCase();
        }else{
            return elem.charAt(0).toUpperCase() + elem.slice(1)
        }
    })
    // console.log(str)
    return str.join('')
    console.log(str)
}


console.log(toCamelCase('hello world vivek')); //output: helloWorldVivek


//method chaining

const toCamelCase1 = (str)=>{
   return str.trim().split(' ').map((elem,index)=>{
        if(index===0){
            return elem.toLowerCase();
        }else{
            return elem.charAt(0).toUpperCase() + elem.slice(1)
        }
    })
    // console.log(str)
   .join('');
}


console.log(toCamelCase1('hello world vivek')); //output: helloWorldVivek


const toSnakeCase = (str)=>{
   str = str.trim().toLowerCase().split(' ');
   console.log(str);
   return str.join('_');
}

console.log(toSnakeCase('hello World')); //output: hello_world
