const prompt = require('prompt-sync')({sigint: true});

// Converting inches into feet
const lengthInInches = prompt("Enter length in inches :");
let result = lengthInInches / 12;
console.log(lengthInInches+ " inches in feet is : " +result+ " ft.");

// Converting feet into meter
const lengthInFeet = prompt("Enter length in feet :");
let convertedLength = lengthInFeet / 3.8;

const breadthInFeet = prompt("Enter breadth in feet :");
let convertedBreadth = breadthInFeet / 3.8;

console.log("Converted length and breadth is : " +convertedLength+ "m and " +convertedBreadth+ "m");

// Calculating area of 25 rectangular plots in acres
let calculatedArea = lengthInFeet * breadthInFeet;
console.log("Area in feet is : " +calculatedArea);

let calculatedAreaInAcres = calculatedArea / 43560;
console.log("Area in acres is : " +calculatedAreaInAcres);

let totalArea = 25 * calculatedAreaInAcres;
console.log("Area for 25 plots is : " +totalArea);