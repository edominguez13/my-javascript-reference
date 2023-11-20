////////////// FOR LOOP //////////////

for (var i = 0 ; i <= 10; i++) {
    console.log(i);
}

////////////// WHILE LOOP //////////////


var counter = 0;
while (counter < 3) {
    counter++;
    console.log(counter);
}

var shall_continue = true;
var a = 0;
while (shall_continue) {
    a++;
    console.log(a);
    if (a == 3) {
        shall_continue = false;
        console.log('end');
    }
}

////////////// NESTED LOOPS //////////////

for (i = 1; i <= 2; i++) {
    for (j = 1; j <= 7 ; j ++) {
        console.log('Week '+ i +' day '+ j)
    }
}