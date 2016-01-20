//Given an integer, write a function to determine if it is a power of three.
var isPowerOfThree = function(n) {
    var result = 3;
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }

    while (result <= n){
        if (n === result){
            return true;
        }
        result = result * 3;
    };
    return false; 
};

// Could you do it without using any loop / recursion?