const prompt = require('prompt-sync')({sigint : true});

const number = prompt('Enter a number: ');
let fact = 1;

for ( i = 2; i <= number; i++ ) {
    fact = fact * i;
}
console.log("Factorial of "+number+ " is " + fact);