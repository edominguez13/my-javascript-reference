// Object declaration

var person1 = {}; // the same as a python dictionary.
person1.name = 'Pablo';
person1.age = 32;

// console.log(person1);


var person2 = {
    name : 'Maria',
    age : 25,
}

// console.log(person2);

person2.haircolor = 'Brown';
// console.log(person2.haircolor);


////////Object Literals and the Brackets Notation ////////

var person3 = {};
person3['name'] = 'Ana';
person3['Date of birth'] = '1990-07-15' // Allow space characters

console.log(person3);

person3.heightCM = 170;
console.log(person3); // You can mix dot notation with bracket notation.

var person4 = {
    'first name' : 'Arturo',
    age : 35,
}

console.log(person4);

person4['age'] = 36;
console.log(person4['age']);


////// object iteration of keys /////
var car = {
    color : 'red',
    brand : 'toyota',
    year : '2019',
};

var carKeys = ['color', 'brand', 'year'];

for (i = 0; i < carKeys.length; i++) {
    console.log(car[carKeys[i]]);
}