/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function(data) {
    let totalSum = 0;
    for (let x = 0; x < data.length; x++) {
      if (data[x] === "a" || data[x] === "e" || data[x] === "i" || data[x] === "o" || data[x] === "u") {
        totalSum++;
      }
    }
    return totalSum;
  };
  
  console.log(numberOfVowels("orange")); // 3
  console.log(numberOfVowels("cornerstone college")); // 7
  console.log(numberOfVowels("aeiou")); // 5
