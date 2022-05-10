const prompt = require('prompt-sync')();

let stake = prompt("Enter the stake amount: ");
let goal = prompt("Enter the desired amount: ");
let trials = prompt("Enter the number of trials to perform: ");

let bets = 0;
let wins = 0;
let i = 0;
let cash = stake;

while ( i < trials ) {
    while ( cash > 0 && cash < goal) {
        bets = bets + 1;
        let toss = Math.floor ( Math.random() * 2 );
        if ( toss == 0 ) {
            wins = wins + 1;
            cash = cash + 1; 
            break;
        }
        else {
            cash = cash - 1; 
            break;
        }
    }
    if ( cash == goal ) {
        console.log("Game over.");
    }
    i++;
}

console.log("Wins in total trials: " +wins);
console.log("Number of bets made: " +trials);