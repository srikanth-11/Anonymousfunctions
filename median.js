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
   let  m=userInput[1].split(" ");
   // convert string to numbers
        n=n.map(item=>parseInt(item))
        m=m.map(item=>parseInt(item))
   // function to find  median of  the array of elements
   let findmedian=function(x,y){
       let totalarr=[...x,...y].sort((a,b)=>a-b)
       let mp=Math.floor(totalarr.length/2)
       if(totalarr.length%2==0){
           return (totalarr[mp]+totalarr[mp-1])/2;
       }
       else
       {
           return totalarr[mp];
       }
   }
   // print the median
   console.log(findmedian(n,m));
      
});
  