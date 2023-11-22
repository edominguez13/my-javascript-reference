// A random whole numbre between 1 - 100

var x = Math.random(); // random number 0 - 1
x*=100; // upgrading to 0 - 100
x = Math.ceil(x); // ceil(x) to round up, in order to avoid returnin 0

console.log(x);

