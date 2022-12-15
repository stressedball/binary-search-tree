'use strict';

import {deleteNode, find, insert} from './functions.js';
import {height} from './height.js'
import { levelOrder } from './levelOrder.js';
import {prettyPrint, Tree} from './main.js';
import {preOrder, inOrder, postOrder} from './InPrePostOrder.js';
import { depth } from './depth.js';
import { isBalanced } from './isBalanced.js';
import {reBalance} from './reBalance.js';

const example = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 154];
// [1, 23, 8, 4, 3, 5, 7, 9, 67, 6345, 324, 154] // removed duplicates
// [1, 3, 4, 5, 7, 8, 9, 23, 67, 154, 324, 6345] // Sorted
// make new tree from example array
const tree = new Tree(example);
prettyPrint(tree.root);

isBalanced(tree.root)
// adding a few nodes
insert(121);
insert(1349);
insert(-65);
insert(-65); // duplicate returns message
insert(54); 
insert(678);
insert(48);
isBalanced(tree.root); // takes the root node // returns that tree is not balanced at 67 / 23 / 6345 / 324
prettyPrint(tree.root);

// Deleting few nodes 
// deleteNode(678); // leaf 
// deleteNode(54); // one children
// deleteNode(48); // leaf
// deleteNode(324); // one children
// deleteNode(154); // removing child with populated children
// deleteNode(67);
// deleteNode(5);

// THIS I NEED TO DO
// BELOW //////////////////
// deleteNode(9); // root ? 


// finding a value
find(67); // returns the value
// find(6521); // returns not found message

// levelOrder(tree.root); // printing levels

// preOrder(6345, tree.root); //
// inOrder(154, tree.root); //
// postOrder(5, tree.root);

height(5, tree.root); //
// depth(-65, tree.root); // returns 4

const newTree = reBalance(tree.root); // we balance the tree
prettyPrint(newTree.root); // prints balanced tree


isBalanced(newTree.root); // tree is balanced

export {tree}