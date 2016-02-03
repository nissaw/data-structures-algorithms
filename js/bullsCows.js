https://leetcode.com/problems/bulls-and-cows/

var getHint = function(secret, guess) {
 var a = 0;
 var b = 0;
 var secretObj = {};
 
 //iterate through secret string and copy into an object
 //could use reduce here 
 for (var i = 0; i < secret.length; i++){
    var num = secret[i];
    if (secretObj[num]){
        secretObj[num]++;
    } else {
        secretObj[num] = 1;
    }
 }
 
 //iterate through guess and check for exact matches to increment A
 for (var j = 0; j < guess.length; j++){
     // if there is a matching char in the obj increment b count and decrement obj count
     if (secretObj[guess[j]] && secretObj[guess[j]] > 0){
         b++;
         secretObj[guess[j]]--;
     }
     // if it's an exact match to the positon decrement b and increment a
     if (guess[j] === secret[j]){
         a++;
         b--;
     }
 }
 
return a + "A" + b + "B";
 
};