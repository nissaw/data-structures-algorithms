'use strict'

var addDigits = function(num) {
  // non-negative numbers only
  if (num < 10){
    return num;
  } else {
      var total = 0;
      var str = num.toString().split('');
      for (var i = 0; i < str.length; i++){
        total += Number(str[i]);
      }
      return addDigits(total);

  }


};

console.log(addDigits(189), 'result');

// have a number 189
// if it is less than 10 return it. 
// else add up all its digits and call addDigits on it