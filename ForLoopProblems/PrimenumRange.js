const prompt = require('prompt-sync')();

const lowerLimit =Number( prompt("Enter lower number: "));
const higherLimit =Number( prompt("Enter higher number: "));

console.log("Prime numbers between entered range are: ")

if (lowerLimit>= 0 && lowerLimit< higherLimit) {
    for(let i = lowerLimit; i <= higherLimit; i++) {
        let flag = 0;


    // looping through 2 to user input number
    for (let j = 2; j < i/2; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
    }
}