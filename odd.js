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
   // convert string elements to numbers
   let numarr=n.map(item=>parseInt(item))
   // check for odd numbers in an array 
   let arr=numarr.filter(item=>item%2!=0)
   // print the odd numbers in an array
   console.log(arr.join(" "));
    
  //start-here
  //Your code goes here … replace the below line with your code logic 

  

  //end-here
});