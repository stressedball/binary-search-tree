# binary-search-tree

The project is centered about building a binary tree and 
functions that will return information about the tree.

We take an array and remove its duplicates.

// All methods below rely on the "divide and conquer" logic.

We then build a binary tree by using the same recursive 
methods.

The tree is composed of a root and nodes.

Each node has 3 properties :
a left child,
a right child,
a value

We build an insert function.
A delete function.
A find function.
A level Order function. Uses a breadth-first search. 
This method relies on a queue (Data structure). 
While the queue isn't empty we can go through all nodes 
before getting to their children, ie stay at the 
same level order.
A height function. Uses a depth-first search.
A depth function. Uses a depth-first search.
An inOrder, preOrder, and postOrder function.

Finally we check if the tree is balanced.

A balanced binary tree needs to respect :

- height of left subtree and right subtree of root differ 
by at most 1.
- left and right subtrees are balanced

# WEBPACK management

- review webpack.config
- make sure that "type": module in package.json doesn't interfere 
with the dist/main.js --> had to add it in order to run tests in Node
