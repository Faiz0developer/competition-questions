/* que->
Write a function which accepts an sorted array 'nums' and return an array of strings. String should be minimum range
of element,[a,b] which covers exactly all elements between a and b including a and b.

eg-> [1,2,5,6,7,10,11]
output-> ["1->2", "5->7","10->11"]

*/

const summaryRanges = (nums) => {
  let rangeStr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].toString();
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      str = nums[count] + "->" + nums[i + 1];
      i++;
    }

    rangeStr.push(str);
    count = i+1;
  }
  return rangeStr;
};

const nums = [0, 1, 2, 4, 5, 7];
const myRanges = summaryRanges(nums);
console.log(myRanges);
