/* JS doesnt support named parameters, but you can solve that by givind the function an object */

function example(args = {}) {
    return args;
}

console.log(example());
console.log(example(args = {anything: 'anything'})); // also **kwargs

// *args can be done with arrays 

/*************************************/

function calculator(args={ num1: 0, operator: '+', num2: 0}) {
    let num1 = args.num1;
    let operator = args.operator;
    let num2 = args.num2;

    switch (operator) {
        case '-':
            console.log(num1 - num2);
            return num1 - num2;
        case '*':
            console.log(num1 * num2);
            return num1 * num2;
        case '/':
            if (num2 != 0) {
                console.log(num1 / num2);
                return num1 / num2;
            } else {
                console.log('Error: Can not divide by zero.');
                break;
            }    
        default:
            console.log(num1 + num2);
            return num1 + num2;
    }
}


calculator(args= {num1: 2, num2: 2});
calculator(args= {num1: 2, operator: '/', num2: 2});
calculator(args= {num1: 2, operator: '/', num2: 0});
calculator(args= {num1: 2, operator: '*', num2: 5});