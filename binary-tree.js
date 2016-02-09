	'use strict';

	class BinaryTree {

		constructor() {
			this.root = null;
		}

		insert(data) {
			//Create a new node
			var newNode = new Node();
			newNode.data = data;
			if (this.root === null) {
				this.root = newNode;
			}
			else {
				var current = this.root;
				var parent;
				while(true) {
					parent = current;
					//go in the left
					if(data < current.data) {
						current = current.left;
						if(current === null) {
							parent.left = newNode;
							return;
						}
					}
					//to go in the right
					else {
						current = current.right;
						if(current === null) {
							parent.right = newNode;
							return;
						}
					}
				}
			}
		}

		contains(data) {
			var current = this.root;
			// to do while will not find
			while(current.data !== data) {
			//to go in the left
			if(data < current.data)
				current = current.left;
			//to go in the left
			else 
				current = current.right;
			//if value doesn't exist
			if(current === null)
				return false;
		}
		return true;
	}

	remove(data) {
		var current = this.root;
		var parent = this.root;
		var isLeftChild = true;
			// to do while will not find
			while(current.data !== data) {
				parent = current;
			//to go in the left
			if(data < current.data) {
				isLeftChild = true;
				current = current.left;
			}
			//to go in the left
			else {
				isLeftChild = false;
				current = current.right;
			}
			//if value doesn't exist
			if(current === null)
				return false;
		}
		// If the node has no children, it is simply removed.
		if(current.left === null && current.right === null)
		{
			if(current === this.root)
				this.root = null; 
			else if(isLeftChild)
				parent.left = null; 
			else 
				parent.right = null;
		}
	// If there is no right descendant node is replaced by the left subtree
	else if(current.right === null)
		if(current === this.root)
			this.root = current.left;
		else if(isLeftChild)
			parent.left = current.left;
		else
			parent.right = current.left;
	// If there is no left descendant node is replaced by the left subtree
	else if(current.left === null)
		if(current === this.root)
			this.root = current.right;
		else if(isLeftChild)
			parent.left = current.right;
		else
			parent.right = current.right;
		else {
	// Search for a successor to the remote node (current)
	var successor = getSuccessor(current);
	// Parent of current associated with the intermediary
	if (current === this.root){
		this.root = successor;
	} else if (isLeftChild){
		successor.left = parent.left.left;
		parent.left = successor;

	} else {
		successor.left = parent.right.left;
		parent.right = successor;
	}
	// -------------------------------------------------------------
	// Method returns the node with the next value after delNode.
	// For this it first proceeds to the right descendent and then
	// Traces a chain of left descendants of this node.
	function getSuccessor(delNode)
	{
		var successorParent = delNode;
		var successor = delNode;
		var current = delNode.right; 
		while(current !== null)
	{
		successorParent = successor;
		successor = current;
		current = current.left; 
	}
									// If the receiver is not
	if(successor !== delNode.right) // the right descendant,
	{ 
									// Create a connection between the nodes
		successorParent.left = successor.right;
		successor.right = delNode.right;
	}
	return successor;
		}
	}
}

size() {
	var oRoot = this.root;
	if (oRoot === null){
		count = 0;
		return count;
	} else {
		var count = getSize(oRoot);
		return count;
	}
	//Recursion
	function getSize(oRoot){
		if (oRoot !== null){
			return 1 + getSize(oRoot.left) + getSize(oRoot.right);
		}
		return 0;
	};
}
isEmpty() {
	return (this.root === null) ? true : false;	
	}
}
