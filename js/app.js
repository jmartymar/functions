console.log('Javascript file is loaded!');

// Define multiply, divide, and subtract arrow functions

const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const subt = (a, b) => a - b;

let math = mult(add(1,4), subt(2, 5));
console.log(math);




// fnDeclaration();
// fnExpression();

// function fnDeclaration() {
//     console.log('I\'m a function declaration!');
// }

// const fnExpression = function () {
//     console.log('I\'m a function expression!');
// }

function computeArea(width, height) {
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height}`;
}

console.log(computeArea(5, 25));
