/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortString(str) {
  str = str.toLowerCase();
  return str.split("").sort().join("");
}

function isAnagram(str1, str2) {
  var sortedStr1 = sortString(str1);
  var sortedStr2 = sortString(str2);

  return sortedStr1 === sortedStr2;
}

var result = isAnagram('listen', 'silent');
console.log(result);

module.exports = isAnagram;