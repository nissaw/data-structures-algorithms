// They need help writing an algorithm to find the intersection of two users' love rectangles.

  var my_rectangle = {

    // coordinates of bottom-left corner:
    'x': 1,
    'y': 5,

    // width and height
    'width': 10,
    'height': 4
};

// will not intersect if 
//rect2[x] + width <= rect1[x] || rect2[x] >= rect1[x] + width
//or
//rect2[y] + height <= rect1[y] || rect2[y] >= rect1[y] + width

//overlap[x] is equal to 
  // the greater of ( rect1[x], rect2[x] )

//to find width of overlap 
  // find the lesser of (rect1[x] + width, rect2[x] + width) - the greater of ( rect1[x], rect2[x] )

//overlap[y] is equal to 
  //the greater of (rect1[y], rect2[y])

//height of overlap is equal to 
  // the lesser of ( rect1[y] + height, rect2[y] + height )


//should return the x, y, height and width of overlap
var Rectangle = function(x, y, width, height){
  var rect = {};
  rect.x = x;
  rect.y = y;
  rect.width = width;
  rect.height = height;
  return rect;
};

var firstLove = Rectangle(1, 5, 10, 4);
var secondLove = Rectangle(3, 7, 2, 8);

var findOverlap = function(rect1, rect2){
  var x;
  var y;
  var width;
  var height;
 //no overlap if 
 if ( ( rect1.x >= rect2.x + rect2.width ) || (rect2.x >= rect1.x + rect1.width) ){
    return null;  
 }
 if ( (rect1.y >= rect2.y + rect2.height ) || (rect2.y >= rect1.y + rect1.width) ){
  return null;
 }
 else {
  x = Math.max( rect1.x, rect2.x );
  y = Math.max( rect1.y, rect2.y );
  width = Math.min( rect1.x + rect1.width, rect2.x + rect2.width ) - x;
  height = Math.min( rect1.y + rect1.height, rect2.y + rect2.height ) - y; 
 }

 return Rectangle(x, y, width, height);
}

var size = findOverlap(firstLove, secondLove);
console.log(size);



