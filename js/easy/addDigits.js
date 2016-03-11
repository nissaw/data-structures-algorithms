'use strict'

var addDigits = function(num) {
  // non-negative numbers only
  var total = 0;
  
  if (num < 10){
    return num;
  } else {
      var str = num.toString().split('');
      for (var i = 0; i < str.length; i++){
        total += Number(str[i]);
      }
      return addDigits(total);
  }
};

console.log(addDigits(189), 'result');
console.log(addDigits(0), 'result');
console.log(addDigits(10), 'result');
console.log(addDigits(22), 'result');
console.log(addDigits(66), 'result');

// have a number 189
// if it is less than 10 return it. 
// else add up all its digits and call addDigits on it