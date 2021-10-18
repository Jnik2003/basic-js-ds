const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {

  constructor() {
    this.rooten = null;
  }

  root() {
    return this.rooten;
  }

  add(data) {
    let newHost = new Node(data);

    if (this.rooten === null) this.rooten = newHost;
    else this.addNode(this.rooten, newHost);
  }

  addNode(node, newHost) {
    if (newHost.data < node.data) {
      if (node.left === null) node.left = newHost;
      else this.addNode(node.left, newHost);
    } else {
      if (node.right === null) node.right = newHost;
      else this.addNode(node.right, newHost);
    }
  }

  has(data) {
    if (!this.find(data)) return false;
    else return true;
  }

  find(data) {
    return this.findNode(this.rooten, data);
  }
  findNode(node, data) {
    if (!node) return null;
    else if (data < node.data) return this.findNode(node.left, data);
    else if (data > node.data) return this.findNode(node.right, data);
    else return node; 
  }

  remove(data) {
    this.node = this.removeNode(this.rooten, data); //reinitialized the root
  }

  removeNode(node, data) {
    if (!node) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if ((!node.left) && (!node.right)) {
        node = null;
        return node;
      } 
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      } else {
        let minElRight = this.findMin(node.right);
        node.data = minElRight.data;

        node.right = this.removeNode(node.right, minElRight.data);
        return node;
      }
    }
  }

  min() {
    return this.findMin(this.rooten).data;
  }
  findMin(node) {
    if (!node.left) return node;
    else return this.findMin(node.left);
  }

  max() {
    return this.findMax(this.rooten).data;
  }
  findMax(node) {
    if (!node.right) return node;
    else return this.findMax(node.right);
  }

}