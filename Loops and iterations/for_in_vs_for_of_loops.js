//////////// With lists || arrays

var colors = ['red', 'blue', 'yellow', 'green', 'brown', 'purple', 'pink'];

for (color in colors) { // iterates index number
    console.log(color); 
}

for (color of colors) { // iterates the values
    console.log(color);
}

console.log('---------------------------');
/*----------------------------------------------------------------------------*/

//////////// With objects prototypes

const car = {
    color : 'blue',
    doors : 4,
    speed : 'slow',
}

const sportsCar = Object.create(car); // inheritance
sportsCar.speed = 'fast';

console.log('--------[for in]--------');
console.log(car);
for (prop in sportsCar) {
    console.log(prop); // prints all the keys including the parents
}

console.log('--------[for of]--------');
console.log(sportsCar);
for (prop of Object.keys(sportsCar)) {
    console.log(sportsCar[prop]); // prints the keys of the child only
}


