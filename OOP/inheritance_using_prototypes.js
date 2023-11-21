/* It's better to use the class syntax for more complex object creation */

//////// The prototype object
var bird = {
    hasWings : true,
    canFly : true,
    hasFeathers : true,
}

//////// The inheritance with the Object.create();
var eagle1 = Object.create(bird);

console.log('eagle1: ', eagle1);
console.log('eagle1 has wings: ', eagle1.hasWings);
console.log('eagle1 can fly: ', eagle1.canFly);
console.log('eagle1 has feathers: ', eagle1.hasFeathers);


var penguin1 = Object.create(bird);
penguin1.canFly = false;

console.log('penguin1: ', penguin1);
console.log('penguin1 has wings: ', penguin1.hasWings);
console.log('penguin1 can fly: ', penguin1.canFly);
console.log('penguin1 has feathers: ', penguin1.hasFeathers);


