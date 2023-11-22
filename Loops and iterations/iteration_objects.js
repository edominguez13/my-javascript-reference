////// object iteration of keys /////
var car = {
    color : 'red',
    brand : 'toyota',
    year : '2019',
};

console.log(Object.keys(car)); // [ 'color', 'brand', 'year' ]
console.log(Object.values(car)); // [ 'red', 'toyota', '2019' ]
console.log(Object.entries(car)); // [ [ 'color', 'red' ], [ 'brand', 'toyota' ], [ 'year', '2019' ] ]

for (const key of Object.keys(car)) { // if you use 'in' instead of 'of' you it will take the index number
    console.log(key,':',car[key]);
}
