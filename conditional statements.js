var num = 60; // in vs code you have to save the file before running the program

if (num > 50) {
    console.log("The number is over 50.")
} else if (num == 50) {
    console.log("The number is equal to 50.")
} else {
    console.log("The number is under 50.")
}


//////////////////////////////////////////////////////////////////////////////////


let day; // Shift + Alt + F formats the document with correct indentation.
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log('Today is '+ day);

/////////////////////////////////

var place = "second";
var medal = "";

switch (place) {
    case "first":
        medal = "gold";
        break;
    case "second":
        medal = "silver";
        break;
    case 'third': // I prefer single quotes
        medal = 'bronze';
        break;
    default:
        medal = 'no medal'
}
console.log(medal)