// is an integer a pallindrome / constant space

var isPalindrome = function(x) {
    
    var stringNum = x.toString(); 
    var len = stringNum.length; 
    var half = Math.floor(len/2); 
    
    for (var i = 0; i < half; i++){
        if(stringNum[i] !== stringNum[len-1-i]){
            return false;
        }
    }
    return true;
};