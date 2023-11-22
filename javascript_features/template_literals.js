// The use of backticks, dollar sign and curly braces

let greet = "Hello";
let place = "World";


console.log(`${greet} ${place} !`) //display both variables using template literals
console.log(greet + " " + place + "!"); //display both variables without using template literals


//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 

let multiLineText = ` 
    THIS
    IS 
    A
    MULTI LINE
    TEXT
`

console.log(multiLineText); // this may be used when inserting HTML elements.

let txt1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Bibendum at varius vel pharetra. Mauris ultrices eros in cursus turpis massa tincidunt dui." ;
let txt2 = "Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet tellus cras adipiscing enim eu turpis. At lectus urna duis convallis convallis tellus. Nibh cras pulvinar mattis nunc. Mauris pharetra et ultrices neque. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aliquet bibendum enim facilisis gravida neque convallis a cras.";

console.log(`combining large texts easy:

    ${txt1}. ${txt2}`);