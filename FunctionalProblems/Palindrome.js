const prompt = require('prompt-sync')({sigint : true});

function checkPalindrome(a) {
   let rem = 0;
   let rev = 0;
    while ( a > 0 ) {
        rem = a % 10;
        rev = rev * 10 + rem;
        a = Math.floor(a / 10);
    }
    
    if ( rev == b ) {
        return 0;
    }
    else {
        return 1;
    }
}

let a = prompt('Enter the first number: ');
let b = prompt('Enter the second number: ');

if (checkPalindrome(a) == 0) {
    console.log(a+ " and " +b + " are palindrome");  
}
else {
    console.log(a+ " and " +b + " are not palindrome");
}