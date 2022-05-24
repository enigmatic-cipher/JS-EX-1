/* 
WAP JavaScript function that reverse a number.
*/

function reverse_a_number(n)
  {
    n = n + "";
    return n.split("").reverse().join("");
  }

let num = prompt("Enter Number to Reverse: ");
console.log("Reverse Number is : " + Number(reverse_a_number(num)));
