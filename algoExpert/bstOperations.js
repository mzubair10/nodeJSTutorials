class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root == null) {
            this.root = new Node(value);
            return this;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = new Node(value);
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right == null) {
                    currentNode.right = new Node(value);
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
        return this;
    }

    contains(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value == value) return true;
            if (value < currentNode.value) {
                if (currentNode.left == null) return false;
                currentNode = currentNode.left;
            } else {
                if (currentNode.right == null) return false;
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    remove(value) {
        return this.removeNodeRecursive(this.root, this.root, value);
    }

    removeNodeRecursive(node, parent, value) {
        if (node.value < value) {
            this.removeNodeRecursive(node.right, node, value);
        } else if (node.value > value) {
            this.removeNodeRecursive(node.left, node, value);
        } else {
            //found a match
            //case 1 = both left and right nodes are empty
            if (node.left == null && node.right == null) {
                if (parent.value > node.value) {
                    parent.left = null
                } else {
                    parent.right = null;
                }
                return this;
            }
            //case 2 - only one child
            else if (node.left == null || node.right == null) {
                if (node.left == null) {
                    if (parent.value > node.value) {
                        parent.left = node.right;
                    } else {
                        parent.right = node.right;
                    }
                    return this;
                } else if (node.right == null) {
                    if (parent.value < node.value) {
                        parent.right = node.left;
                    } else {
                        parent.left = node.left;
                    }
                    return this;
                }
            }
            //case 3 - both child are present
            else if (node.left != null && node.right != null) {
                let tmpParentNode = null;
                let nodeToBeDeleted = node;
                node = node.right;
                while(node.left != null) {
                    tmpParentNode = node;
                    node = node.left;
                }
                if(node.right != null) {
                    tmpParentNode.left = node.right;
                    node.right = null;
                } else if (tmpParentNode != null) {
                    tmpParentNode.left = null;
                }
                nodeToBeDeleted.value = node.value;
            }
            return this;
        }
    }
}

let bstI = new BST();
bstI.insert(20);
bstI.insert(16);
bstI.insert(22);
bstI.insert(12);
bstI.insert(18);
bstI.insert(21);
bstI.insert(26);
bstI.remove(22);
console.log(bstI.root);

exports.BST = BST