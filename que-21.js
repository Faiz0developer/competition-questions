/*que-21()
    Create a function which accepts two array 'num1,nums2' and two number 'm,n'. This function short the "num1" array
    to length "m"  and then merge "num1" and "num2" into "num1" and sorted it in increasing order as well.
*/


const merge = (nums1,m,nums2,n) => {
    nums1.length = m
    nums1.push(...nums2)
    nums1.sort((a,b) => a-b)
    return nums1
}

const nums1 = [-10,-4,-1,0,0,3,3,3,0,0,0]
const m=6;
const nums2 = [1,2,2];
const n = 3;

const mergeArray = merge(nums1,m,nums2,n)
console.log(mergeArray)
