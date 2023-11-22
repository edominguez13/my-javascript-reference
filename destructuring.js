/* The concept of destructuring is taking one value of and object or array and giving it to an independent 
variable. */

var plane = {
    color : 'white',
    company : 'American Airlines',
    takeOff : function() {
        console.log('Fasten your seatbelts, we are going to fly');
    }
}

let color = plane.color;

function compareVar(var1, var2) {
    if (var1 == var2) {
        console.log('Equal value', var1, var2);
    } else {
        console.log('Different value', var1, var2);
    }
}

compareVar(color, plane.color);

color = 'blue'; 

compareVar(color, plane.color); // Doesn't affect the plane object

let PI = Math.PI;

compareVar(PI, Math.PI);

PI = 1;

compareVar(PI, Math.PI); // Doesn't affect the Math object