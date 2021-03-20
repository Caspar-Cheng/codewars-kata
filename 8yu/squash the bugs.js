/* Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word. */


// long solution
// function findLongest(str) {
  
//   let spl = str.split(" ");
//   let longest = 0
  
//   for (let i = 0; i < spl.length; i++) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length
//     }
//     }
//     return longest
// }


// short solution
const findLongest = str => Math.max(...str.split(' ').map(w => w.length));
