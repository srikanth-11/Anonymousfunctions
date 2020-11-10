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
   // function to add the array elements
   let sum=function(){
       let s=numarr.reduce(
           function(accumilator,item)
           {
               return accumilator+item;
           }
           ,0);
       // print the sum of the array elements
       console.log(s);
   }
   // invoke the function 
   sum(n);
});