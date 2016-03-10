function powerSet1(string) {
  var obj = Array.prototype.reduce.call(string, function(acc, c){
    !acc[c] && (acc[c] = 1);
    return acc;
  },{})
  console.log (obj);

  var arr = Object.keys(obj).sort();
  var ans = [""];

  arr.forEach(function(e, i){
    ans.push(e);
    for(var j=1; (i+j)<=arr.length;j++){
      var arr2 = arr.slice( (i+j), arr.length);
      arr2.reduce(function(acc, e2, k){
        acc = acc.concat(arr2[k]);
        ans.push(acc);
        return acc;
      },e);
    }
  });
  return ans;
}

var horse = powerSet1("horseee");
console.log(horse);