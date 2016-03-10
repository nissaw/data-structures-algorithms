var arr1 = [4, 15, 16, 50];
var arr2 = [8, 23, 42, 108];


// compares the value of the first elements of arrays
var returnSmallest = function(arr1, arr2){
  // only run comparison is both arrays contain elements
  if (arr1.length > 0 && arr2.length > 0){
    //compare values and slice off the smaller one to be returned 
    if (arr1[0] < arr2[0]) {
      return arr1.splice(0, 1)[0];
    } else {
      return arr2.splice(0, 1)[0];
    } 
  } else {
    // if one array has length === 0 return the first element of the other
    return arr1[0] !== undefined ? arr1.splice(0, 1)[0] : arr2.splice(0, 1)[0];
  }
  // will return undefined if called on two empty arrays
};

// merge takes 2 sorted arrays and returns one sorted array containing all elements
var merge = function(arr1, arr2){
  var temp = [];
  while (arr1.length > 0 || arr2.length > 0){
    temp.push(returnSmallest(arr1, arr2));
  }
  return temp; 
};


//look at the first element of the two lists // if length > 0
  //insert into new array the smaller of the two

// need arr1.length + arr2.length comparisons

// take a big list
  // split unti you have lists of one element
  // merge neighboring lists into lists of 2

var splitList = function(array, result){
  result = result || [];
  if (array.length === 1) {
    return result.push(array);
  } else {
    var temp = [];
    var mid = Math.ceil(array.length/2); // [1, 2, 3] mid == 2
    for (var i = 0; i < mid; i++){
      temp.push(array.pop()); // [1], [3, 2]
    }
    console.log(array);
    console.log(temp);
    console.log(result);
    
    splitList(array, result);
    splitList(temp, result);
  }
  return result;
};

var splitter = splitList([1, 2, 3, 4, 5, 6]);
console.log(splitter); //[ [ 1 ], [ 3 ], [ 2 ], [ 6 ], [ 4 ], [ 5 ] ]

// start with the first element and 'merge' it with it's neighbor
// if arr.length = x we will perform Math.floor(x/2) merges
var mergeNeighbors = function(arr){
  var newArray = [];
  for (var i = 0; i < arr.length - 1; i++){
    newArray.push(merge(arr[i], arr[i + 1]))
    console.log(newArray);
  };
  return(newArray);
};

var oneMerge = mergeNeighbors(splitter);
console.log(oneMerge, "first Merge");



// var merged = merge(arr1, arr2);
// console.log(merged);

// Big O: O(n log n)

// bubble, 
// insertion, 
// selection, 
// quicksort 
// merge

// returnSmallest([], arr2);
// console.log (arr2);
// returnSmallest([], arr2);
// console.log (arr2);
// returnSmallest([], arr2);
// console.log (arr2);
// returnSmallest([], arr2);
// console.log (arr2);
// var small = returnSmallest([], arr2);

// console.log(small);