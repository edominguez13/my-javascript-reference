var colors = ['red', 'blue', 'yellow', 'green', 'brown', 'purple', 'pink'];

console.log(colors[0]); // 'red'
console.log(colors.length); // 3, array method that counts how many elements the array has

console.log('----------------');

/////// Array iteration ////////

function listArrayItems(arr) { // Javascript calls the latest function declared 
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

listArrayItems(colors);
console.log('----------------');

/////// Another method

for (var color of colors) {
    console.log(color);
}