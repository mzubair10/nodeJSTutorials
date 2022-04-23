//jshint esversion : 6
const nodeDepths = (root, depth = 0) => {
	if (root == null)
		return 0;
	return depth + nodeDepths(root.left,  depth + 1) + nodeDepths(root.right, depth + 1);
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const main = () => {
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);
  return nodeDepths(root);
};


console.log(main());