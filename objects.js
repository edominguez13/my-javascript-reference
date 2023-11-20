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

// console.log(person3);

person3.heightCM = 170;
// console.log(person3); // You can mix dot notation with bracket notation.

var person4 = {
    'first name' : 'Arturo',
    age : 35,
}

// console.log(person4);

person4['age'] = 36;
// console.log(person4['age']);


////// object iteration of keys /////
var car = {
    color : 'red',
    brand : 'toyota',
    year : '2019',
};

var arrOfKeys = ['color', 'brand', 'year'];

for (i = 0; i < arrOfKeys.length; i++) {
    console.log(car[arrOfKeys[i]]);
}

//////// object methods ////////

var plane = {
    color : 'white',
    company : 'American Airlines',
    takeOff : function() {
        console.log('Fasten your seatbelts, we are going to fly');
    }
}

plane.takeOff; // to call a function the () is mandatory
plane.takeOff();

plane.readyToFly = function(nPilots) {
    if (nPilots < 2) {
        console.log('Not ready to fly, you need at least 2 pilots');
        return false;
    } else {
        console.log('Ready to fly');
        return true;
    }
}

plane.readyToFly(nPilots = 2);




