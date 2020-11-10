// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    // split the input into array of elements
   let  n=userInput[0].split(" ");
   // convert string elements to number
   let numarr=n.map(item=>parseInt(item))
   // function to check for prime numbers in the array of elements
   let prime=function(){
       let s=numarr.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
             }
              return true;
        });
       // print the prime numbers
       console.log(s.join(" "));
   }
   // invoke the function 
   prime(n)
   
});