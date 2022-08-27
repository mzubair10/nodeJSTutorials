// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  return iterateTree(tree).at(k-1);
  
}

function iterateTree(tree, collectionOfValues = []) {
  if (tree == null) {
    return;
  }
  iterateTree(tree.right, collectionOfValues);
  collectionOfValues.push(tree.value);
  iterateTree(tree.left, collectionOfValues);
  return collectionOfValues;
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;