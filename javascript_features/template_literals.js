// The use of backticks, dollar sign and curly braces

let greet = "Hello";
let place = "World";


console.log(`${greet} ${place} !`) //display both variables using template literals
console.log(greet + " " + place + "!"); //display both variables without using template literals


//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 