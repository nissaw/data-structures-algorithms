// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
};

var maxDepth = function(root) {
        var max = 0;
    var checkDepth = function(node, counter){
      // need to deal with incrementing if there is no children
      if (node){
        if (node && node.right){
          counter++;
          max = counter > max ? counter : max;
          checkDepth(node.right, counter);
        }
        if (node && node.left){
          counter++;
          max = counter > max ? counter : max;
          checkDepth(node.left, counter);
        }
        else {
          counter++;
          max = counter > max ? counter : max;
        }
    };
   checkDepth(root, 0);
   return max; 
};

var tree = new TreeNode();
tree.right = new TreeNode(5);
tree.right.right = new TreeNode(10);
tree.left = new TreeNode(3);
tree.left.left = new TreeNode(2);
tree.left.left.left = new TreeNode(1);

console.log(maxDepth(tree));