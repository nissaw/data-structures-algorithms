var arr1 = [3, 4, 2, 1];

var bubbleSort = function(arr) {
  var swapped = false;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[i + 1]){
      swapped = true;
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      console.log(arr);

    }
  }
    if (swapped === true){
      swapped = false;
      bubbleSort(arr);
    }
  
  return arr;
};

bubbleSort(arr1);


