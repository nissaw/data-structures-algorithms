'use strict'

const quickSort = (nums) => {
  let result = [];
  if (nums.length < 2){
    return nums;
  }
  let pivot = nums[nums.length-1];
  let less = [];
  let more = [];
  for (let i = 0; i < nums.length-1; i++){
    if (nums[i] > pivot){
      more.push(nums[i]);
    } else {
      less.push(nums[i])
    }
  }
  return result.concat(quickSort(less), pivot, quickSort(more))
};

console.log(quickSort([10,5,3,8,2,6,4,7,9,1]));