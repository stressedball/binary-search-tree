'use strict';

import {deleteNode, find, insert} from './functions.js';
import {height} from './height.js'
import { levelOrder } from './levelOrder.js';
import {prettyPrint, tree} from './main.js';
import {preOrder, inOrder, postOrder} from './InPrePostOrder.js';
import { depth } from './depth.js';
import { isBalanced } from './isBalanced.js';


// adding a few nodes
insert(121);
insert(1349);
insert(-65);
insert(-65); // duplicate returns message
insert(54); 
insert(678);
insert(48);

// Deleting few nodes 
// deleteNode(678); // leaf 
// deleteNode(54); // one children
// deleteNode(48); // leaf
// deleteNode(324); // one children
// deleteNode(154); // removing child with populated children
// deleteNode(67);
// deleteNode(5);
// deleteNode(9); // root ?

prettyPrint(tree.root);

// finding a value
// find(67); // returns the value
// find(6521); // returns console.log message

// levelOrder(); // printing levels

// preOrder(6345);
// inOrder(154);
// postOrder(5);

// height(5); // prints root.node if no parameters are give;

// depth(-65); // returns 4

isBalanced();