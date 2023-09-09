/*QUE-20)

Create a function that accepts an array digits as arguemnts which increase the array digit by one and return new 
array.

*/

const plusone = (digits) => {
  const strFromArray = digits.join("");
  const addOne = BigInt(strFromArray) + BigInt(1);
  let numberArray = [];
  for (let i = 0; i < addOne.toString().length; i++) {
    numberArray.push(parseInt(addOne.toString()[i]));
  }
  return numberArray;
};

const digits = [1, 2, 3];
const resultingArray = plusone(digits);
console.log(resultingArray);

const digits1 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const resultingArray1 = plusone(digits1);
console.log(resultingArray1);
