/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)
//
OUTPUT: integer 
INPUT: integer
CONSTRAINTS: time space - make a duplicate array
EDGE CASES: input 0, 1 : check for negative


[
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]
]
*/


/// provided helpers
function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
};


var robotPaths = function(n){
  // make a new board
  var board = makeBoard(n);
  var count = 0;

/*could build another function to check if pos it visitable
  var canVisit = function(x, y){
    return (x < n && y < n && x >=0 && y >=0 && (board.hasBeenVisited(x, y) === false));
  };
*/

  var sub = function(x, y){
    //flip current spot to visited
    board.togglePiece(x, y);
  
  // BASE CASE: 
    // at postion [n-1, n-1]
    if (x === n - 1 && y === n - 1){
    // flip piece back before returning 
      board.togglePiece(x, y);
    // increment # of paths found

      return count++;
    }

  // RECURSIVE CASE: 
    else {
    // check down [x + 1, 0] 
      if (x + 1 < n && !board.hasBeenVisited(x+1, y)){
        sub(x+1, y);
      }
      // up [x - 1, 0]
      if (x - 1 >= 0 && !board.hasBeenVisited(x-1, y)){
        sub(x-1, y);
      }
      // right [ 0, y + 1]
      if (y + 1 < n && !board.hasBeenVisited(x, y+1)){
        sub(x, y+1);
      }
      // left [ 0, y - 1]
      if (y - 1 >= 0 && !board.hasBeenVisited(x, y-1)){
        sub(x, y-1);
      }
    }
    board.togglePiece(x, y); 
  };

  sub(0, 0);
  return count; 
};


