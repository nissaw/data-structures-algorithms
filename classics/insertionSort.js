'use strict'
//splice (start, deleteCount, insertA, insertB ... ) //returns deleted elements in an array

const insertionSort = (nums) => {  
  // start with the second element
  for (let i = 1; i < nums.length; i++) {
    //look back at the first element and keep checking until you've gotten back to your current loc
    for (let j = 0; j < i; j++) {
      // compare current element with each previous element until you find one it is less than
      if (nums[i] < nums[j]) {
        // when you've found a num that current is less than splice out the current element
        let spliced = nums.splice(i, 1); 
        // splice in the element you just removed at the index where you found the smaller val
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
};

let sorted = insertionSort([10,5,3,8,2,6,4,7,9,1]);
console.log(sorted);