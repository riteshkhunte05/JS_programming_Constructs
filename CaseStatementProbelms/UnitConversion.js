const prompt = require('prompt-sync')({sigint : true});

const number = prompt(`Enter 1. Feet To Inch 2. Feet To Meter 3. Inch To Feet 4. Meter to Feet : `);

const digit = prompt("Enter the length for conversion : ");

switch (Number(number)) {
    case 1:
        let feetToInch = Number(digit) * 12;
        console.log("Feet to Inch : " +feetToInch);
        break;
    case 2:
        let feetToMeter = Number(digit) / 3.281;
        console.log("Feet to Meter : " +feetToMeter);
        break;
    case 3:
        let inchToFeet = Number(digit) / 12;
        console.log("Inch to Feet : " +inchToFeet);
        break;    
    case 4:
        let meterToFeet = Number(digit) * 3.281;
        console.log("Inch to Feet : " +meterToFeet);
        break
    default:
        console.log("You have entered the wrong options!!!");
        break;
}
