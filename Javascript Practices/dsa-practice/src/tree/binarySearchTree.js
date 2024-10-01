console.log("Binary Search Tree");
// what is binary tree
// Binary is a tree where each node can have max
// two child nodes

/*
binary search tree ?
binary search tree is a tree where the value of each left node must
smaller then the parent node
and right node value will be greter then the parent node

opration

insertion - to add node to tree
seach - to search node in the tree
DFS-BFS - to visit node in the tree
deletion - to remove node from tree

uses

Searching
Sorting
To implement abstract data types
such as lookup tabels and priority queue 

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  seach(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.seach(root.left, value);
      } else {
        return this.seach(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.right);
      this.postOrder(root.left);
      console.log(root.value);
    }
  }

  levelNode() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.min(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
// bst.insert(7);
// console.log(bst.seach(bst.root, 10)); // true
// console.log(bst.seach(bst.root, 1)); // false
// -------- DFS --------
// bst.preOrder(bst.root);
// console.log("--------");
// bst.inOrder(bst.root);
// console.log("--------");
// bst.postOrder(bst.root);

// ------BFS -----
// bst.levelNode();

// ---- max
// console.log(bst.max(bst.root));

// ----min
// console.log(bst.min(bst.root));

// bst.delete(bst.root, 5);
bst.inOrder(bst.root);
console.log("------");
