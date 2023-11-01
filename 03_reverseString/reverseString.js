const reverseString = function(str) {
  let splitStr =  str.split('');
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join('');

  return joinStr;
};

// Do not edit below this line
module.exports = reverseString;

// ALTERNATIVE WAY
// const reverseString = function(str) {
//   let newString = '';

//   for (let i = str.length -1; i >= 0; i--) {
//     newString += str[i];
//     console.log(newString)
//   }
      // return newString;
// }

// console.log(reverseString('howdy'))
