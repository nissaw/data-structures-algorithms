var adder = function(a, b){ // 010 011 | 001 100 
  while(b){ //011 | 100 | 0
  sumXOR = a XOR b // 001 | 101
  
  carry = a AND b // 010 | 000 
  b = carry << 1 // 100 | 000
  adder(sumXOR, b) // 001 100 | 101 0 
  }
  return sumXOR
}

2  010    
3  011
_______
5  101


//on each column we are XOR for each colum
a = 010
b = 011


sumXOR = 001
carryAND =  100
______________
         101
  //calculate AND on each column, if greater than 0 then carry

var adder = function(a, b){ // 010 011 | 001 100 
  while(b){ //011 | 100 | 0
  sumXOR = a XOR b // 001 | 101
  
  carry = a AND b // 010 | 000 
  b = carry << 1 // 100 | 000
  adder(sumXOR, b) // 001 100 | 101 0 
  }
  return sumXOR
}

010
100



array(4).concat(array(5)).length


4 + 5 

var adder = function(a, b){
  while (a >= 0){
    b++
    a--
  }
  return b
}