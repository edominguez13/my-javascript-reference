
//////// First JS function ////////

function helloWorld() {
    console.log('Hello world!');
}

helloWorld(); // calling the function


//////// Using arguments and returning values ////////

function addTwoNums(a, b) {
    let sum = a + b;
    console.log(sum); 
    return sum; // returns the value of sum 
}

var seven = addTwoNums(5, 2); // 7, assigning the value of a function to a variable
console.log(seven); // 7

addTwoNums(seven, 2); // 7 + 2 = 9



