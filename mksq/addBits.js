var adder = function(a, b){ // 010 011 | 001 100 
  while(b){ //011 | 100 | 0
  sumXOR = a XOR b // 001 | 101
  
  carry = a AND b // 010 | 000 
  b = carry << 1 // 100 | 000
  adder(sumXOR, b) // 001 100 | 101 0 
  }
  return sumXOR
}