
// There can be only one default export per file
// export default function addTwo(a, b) {
//     console.log(a + b);
// }




function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

// syntax  1 for named exports
// export function addTwo(a, b) {
//     console.log(a + b);
// }

// export function addThree(a, b, c) {
//     console.log(a + b + c);
// }

// syntax 2 for exports
export default addTwo; // only one default
export { addTwo, addThree }; // named exports


