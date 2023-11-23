/// forEach method
/*To explain the syntax, the forEach() method accepts a function that will work on each 
array item. That function's first parameter is the current array item itself, 
and the second (optional) parameter is the index. */
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex); // function is called without the parenthesis

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) { // the index parameter is optional
    console.log(`${index}. ${veggie}`);
});


/// filter method
/*Another very useful method on the array is the filter() method. It filters 
your arrays based on a specific test. Those array items that pass the test are returned.*/
const nums = [0,10,20,30,40,50];
const answer = nums.filter( function(num) {
    // console.log(num > 20); // false false false true true true, just to know the output
    return num > 20;
})
console.log(answer); // [ 30, 40, 50 ]

/// map method
/*This method is used to map each array item over to another array's item, based on whatever 
work is performed inside the function that is passed-in to the map as a parameter. */

const arr1 = [0,10,20,30,40,50];
const arr_mapped = arr1.map( function(num) {
    return num / 10
})
console.log(arr_mapped); // [ 0, 1, 2, 3, 4, 5 ]

