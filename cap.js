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
   // function to Convert all the strings to title caps
   let cap=function(){
       // convert all strings to lower case
       let r=n.map(item=>item.toLowerCase());
       // convert first letter of all strings to upper case
       let caps=r.map(item=>item.charAt(0).toUpperCase() + item.slice(1));
       // print the desired string
       console.log(caps.join(" "));
   }
   // invoke the function 
   cap(n);
});