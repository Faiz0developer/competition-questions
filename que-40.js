/*
Given an integer x, return true if x is a palindrome and false otherwise.
*/

const isPalindrome = (x) => {
  const arrOfNumber = String(x).split("");
  let stringLength =
  arrOfNumber.length % 2 === 0 ? arrOfNumber.length / 2 : Math.ceil(arrOfNumber.length / 2);
  for (
    i = 0, j = arrOfNumber.length - 1;
    i < stringLength, j >= stringLength;
    i++, j--
  ) {
    if (arrOfNumber[i] !== arrOfNumber[j]) return false;
  }
  return true;
};

const x = 10;
console.log(isPalindrome(x));
