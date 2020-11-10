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
   // function to check for palindrome  in the array of elements
   let findpoli=function(){
       let Allpoli=[];
       for(let i = 0;i<n.length;i++){
           if(poli(n[i])){
               Allpoli.push(n[i]);
           }
       }
       return Allpoli;
   }
   // function to check wether the passed word is palindrome or not
   var poli=function(y){
       for(let i = 0;i<Math.floor(y.length/2);i++){
           if(y[i]!==y[y.length-(i+1)]){
             return false;
           }
       }
       return true;
    }
    // print the palindromes by invoking the function
   console.log(findpoli(n).join(" "));
   
});
  