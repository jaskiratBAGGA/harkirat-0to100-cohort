/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const s2 = str.replace(/[^\w]/g, '').toLowerCase();
  //console.log(s2);
  if(s2.length == 0){
    return false;
  }
  let str1 = "";
  for(let i = s2.length-1; i>=0; i--){
      str1 += s2[i];
  }
  //console.log(str);
  if(str1 == s2){
      return true;
  }
}


module.exports = isPalindrome;
