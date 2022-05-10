let sum = 0;
let count=0;
for(let a = 1; a <= 5; a ++){

     let randomNum = Math.floor(Math.random() * 100); 
     console.log("random value is :" +randomNum);
     sum += randomNum;
     count++;
}
console.log("The sum of five random values is : " +sum);
console.log("Total Size of Random Values " +count)
console.log("The Average of Random Values : " +sum/+count )