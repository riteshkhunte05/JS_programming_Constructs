let MAXCOUNT = 11;
 let countHead = 0;
 let countTail = 0;
 
 while(true){
    let randomNumber = Math.floor ( Math.random() * 2 );

    if(randomNumber == 1){
        console.log("Heads");
        countHead = countHead+1;
    }
    else{
        console.log("Tails");
        countTail = countTail+1;
    }

    if(countHead == 11 || countTail == 11){
        break;
    }
 }
 console.log("Number of heads is: " + countHead);
 console.log("Number of tails is: " + countTail);