var colors = ['red', 'blue', 'yellow', 'green', 'blue', 'purple', 'pink'];

console.log(colors[0]); // 'red'
console.log(colors.length); // 3, array method that counts how many elements the array has


/////// Array iteration ////////

function listArrayItems(arr) { // Javascript calls the latest function declared 
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function listArrayItems(arr) { // Has the same name as the previous one
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}


listArrayItems(colors);



//////// String iteration ////////

function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder('test', 't');

/////// using methods pop and push //////
let fruits = ['mango', 'apple'];
fruits.push('banana'); // [ 'mango', 'apple', 'banana' ]


fruits.pop();
console.log(fruits) // [ 'mango', 'apple' ]

