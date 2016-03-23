'use strict'

const mergeSort = (arr) => {
 
  if (arr.length < 2){
    return arr;
  }
  
  let front = arr.slice(0, Math.floor(arr.length/2));
  let back = arr.slice(Math.floor(arr.length/2));
  return stitch(mergeSort(front), mergeSort(back));
};


const stitch = (left, right) => {
  let result = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
};

let arr1 = [4, 15, 16, 50];
let arr2 = [8, 23, 42, 108];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));

