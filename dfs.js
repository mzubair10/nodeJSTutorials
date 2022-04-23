//jshint esversion : 6
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = []) {
    array.push(this.name);
    this.navigateChildren(this.children, array);
    return array;
  }

  navigateChildren(children, array) {
    if (children != null) {
      children.forEach((child) => {
        array.push(child.name);
        this.navigateChildren(child.children, array);
      });
    }
  }
}

const main = () => {
  const nodeA = new Node("A");
  nodeA.addChild("B");
  nodeA.addChild("C");
  nodeA.addChild("D");
  const nodeB = nodeA.children.find((x) => x.name === "B");
  nodeB.addChild("E");
  nodeB.addChild("F");
  const nodeD = nodeA.children.find((x) => x.name === "D");
  nodeD.addChild("G");
  nodeD.addChild("H");
  const nodeF = nodeB.children.find((x) => x.name === "F");
  nodeF.addChild("I");
  nodeF.addChild("J");
  const nodeG = nodeD.children.find((x) => x.name === "G");
  nodeG.addChild("K");
  return nodeA.depthFirstSearch();
};

console.log(main());
