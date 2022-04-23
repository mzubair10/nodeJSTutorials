//jshint esversion : 6
const nodeDepths = (root) => {
  let counter = 0;
	let sumCollection = [];
  nodeDepthsHelper(root, counter, sumCollection);
  return sumCollection.reduce((a,b) => a+b, 0);
};

const nodeDepthsHelper = (root, counter, sumCollection) => {
  let counterIncremented = false;
  if (!root) return;
  if (root.left != null) {
    counter += 1;
    counterIncremented = true;
		sumCollection.push(counter);
    nodeDepthsHelper(root.left, counter, sumCollection);
  }
  if (root.right != null) {
    if (!counterIncremented){
      counter += 1;
    }
    counterIncremented = false;
		sumCollection.push(counter);
		nodeDepthsHelper(root.right, counter, sumCollection);
  }
};

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
  //const root = new BinaryTree(1);
  return nodeDepths(root);
};

console.log(main());
