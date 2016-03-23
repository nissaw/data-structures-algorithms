'use strict'

const bubbleSort = (arr) => {
  let swapped = true;

  while(swapped === true){
    swapped = false; 
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i + 1]){
        swapped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  };
  return arr;
};


let arr1 = [3, 4, 2, 1];
console.log(bubbleSort(arr1));

