const prompt = require('prompt-sync')({sigint : true});

const number = prompt("Enter a range to get power of 2 : ");

for(i = 0; i <= number; i++){
    console.log(Math.pow(2,i));
}