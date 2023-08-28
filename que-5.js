/*
Create a custome map function which accepts a function fn and array arr as arguements. map function should return 
new array with tranformation applied to function fn.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).
*/

let arr = [1, 2, 3];
let arr1 = [10, 20, 30];

const map = function (arr, fn) {
  let myTransformArr = [];
  for (let i = 0; i < arr.length; i++) {
    myTransformArr.push(fn(arr[i], i));
  }
  return myTransformArr;
};

const plusOne = (n) => n + 1;
const plusI = (n, i) => n + i;
const constant = () => 42;

const transFormArr1 = map(arr, plusOne);
const transFormArr2 = map(arr, plusI);
const transFormArr3 = map(arr, constant);

console.log(transFormArr1);
console.log(transFormArr2);
console.log(transFormArr3);
