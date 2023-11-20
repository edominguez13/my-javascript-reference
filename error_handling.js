// The throw keyword
/* Used to throw and error for testing purposes */

// throw new ReferenceError();


// try and catch keywords
/*
try {
    console.log(a + b);
} catch(err) { // this parameter catches the error and can be namen anything but 'err' is a convention.
    console.log(err); 
    console.log('There was an error');
}
console.log('The code does\'nt stop');
*/

////// exercise example using the three keywords


function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number') // adds the text to the error
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) { // err catches the error with the new message
        console.log("Error!", err)
    }
}
addTwoNums(5, '5')
console.log("It still works")


try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }


/////// defensive programming example ////////

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('+++Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")