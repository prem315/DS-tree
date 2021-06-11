class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        if(this.root === null) {     
            let node = new Node(val)
            this.root = node
            return
        }
        let currentNode = this.root;
        let parent;
        while(currentNode) {
            parent = currentNode
            if(val < currentNode.data) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        if(val < parent.data) {
            parent.left = new Node(val)
        } else {
            parent.right = new Node(val)
        }
    }

    insertToBinary(currentNode, val) {
        if(currentNode === null) {
            currentNode = new Node(val);
        } else if(val < currentNode.data) {
            currentNode.left = this.insertToBinary(currentNode.left, val)
        } else {
            currentNode.right = this.insertToBinary(currentNode.right, val)
        }
        return currentNode
    }

    insertRecursively(val) {
        if(this.root === null) {
            this.root = new Node(val)
            return
        }
        this.insertToBinary(this.root, val) 
    }

    preOrderTravel(currentNode) {
        console.log(currentNode);
        if (currentNode!==null) {
            console.log(currentNode.data);
            this.preOrderTravel(currentNode.left);
            this.preOrderTravel(currentNode.right);
        }
    }
}


let tree = new BinaryTree()

tree.insert(4);
tree.insert(9);
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(12);
tree.insert(10);
tree.insert(14);

tree.preOrderTravel(tree.root);