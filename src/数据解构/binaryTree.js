function BinaryTree(key) {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  var root = null

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (newNode.key > node.key) {
        if (node.right == null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
  }
  this.insert = function (key) {
    let newNode = new Node(key)
    if (root == null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var inOrderTraverse = function(node, callback) {
    if (node != null) {
      inOrderTraverse(node.left, callback)
      callback(node.key)
      inOrderTraverse(node.right, callback)
    }
  }
  this.inOrderTraverse = function (callback) {
    inOrderTraverse(root, callback)
  }

}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
var binaryTree = new BinaryTree()
nodes.forEach(key => binaryTree.insert(key))

// console.log(binaryTree);
var callback = function (key) {
  console.log(key);
}
binaryTree.inOrderTraverse(callback)
