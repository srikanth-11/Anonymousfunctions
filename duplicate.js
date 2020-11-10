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
   // function to delete the duplicates in array of elements
   let deleteduplicates=function(){
       let s=n.reduce(
           function(accumilator,item)
           {
               if(accumilator.indexOf(item)==-1)
               accumilator.push(item)
               return accumilator
           }
           ,[]);
           return s.join(" ");
   }
   // print the array 
   console.log(deleteduplicates(n));
});