///// Spread operator '...'
/* is used to spread array items and join objects together */

const nums = [12, 2, 8, 66, 41, 9, 8];
console.log(nums);

function first3(...listOfNums) {
    console.log(listOfNums);
    console.log(listOfNums);
    console.log(listOfNums);
} 

// first3(...nums);


///// Rest operator '...'
/* Destructuring an array */

const [first, second, third, ...otherNums] = nums; // the rest operator groups the left overs of the array

console.log(first);
console.log(second);
console.log(third);
console.log(otherNums);

// the rest parameter have to be at the end of the funciontion parameters
// it turns the remainin arguments into a list or array
function filterEvenNumbers(...numbers) {
    const filteredNumbers = numbers.filter( function(num) {
        console.log(num);
        return num % 2 == 0;
    });
    return filteredNumbers;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8)); // the rest operator turns the arguments and makes a list




/********************* */

////Join arrays, objects using the rest operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


// Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

//You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)