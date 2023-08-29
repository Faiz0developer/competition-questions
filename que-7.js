/* que-7)->
Write a function which take an array 'nums', a functions 'fn' and a initial value 'init' as arguements and return reduced array 
based on functionality applied in fn funtion.
*/

//sol-->>
let nums = [1, 2, 3, 4];
const reduce = function (nums, fn, init) {
  let reduceArray = init;
  for (let i in nums) {
    reduceArray = fn(reduceArray, nums[i]);
  }
  return reduceArray;
};

const sum = (accum, curr) => accum + curr;
const sum1 = (accum, curr) => accum + curr * curr;
const sum2 = (accum, curr) => 0;

console.log(reduce(nums, sum, 0));
console.log(reduce(nums, sum1, 100));
console.log(reduce([], sum2, 25));
