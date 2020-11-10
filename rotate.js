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
        n=n.map(item=>parseInt(item))
   let  k=parseInt(userInput[1])
   // function to rotate the array of elements
   let rotate=function(x){
       for(i=0;i<k;i++)
       {
           x.unshift(x.pop())
       }
       return x.join(" ");
   }
   // print the array 
   console.log(rotate(n));
});