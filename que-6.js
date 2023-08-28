/*
Create a custome filter function which accepts a function fn and array arr as arguement.Filter function should return 
new array with that elements which satisfies the condition of function fn(elements which returning true).
*/

let arr = [0, 10, 20, 30];
let arr1 = [1, 2, 3];

const filter = (arr, fn) => {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

const greaterThan10 = (n) => n > 10;

const firstIndex = (n, i) => i === 0;

const newArr = filter(arr, greaterThan10);
const newArr1 = filter(arr1, firstIndex);

console.log(newArr);
console.log(newArr1);
