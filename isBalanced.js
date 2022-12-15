'use strict';

import { tree } from "./main.js";


// Write a isBalanced function which checks if the tree is balanced. 

// A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

let left = null;
let right = null;
let tempLongest = 0;
let longestPath = 0;

function isBalanced(node = tree.root) {

    if (node === null) {
        return;
    }

    left = measureHeight(node.left);
    reset();


    right = measureHeight(node.right);
    reset();

    // measureHeight(node);
    if (Math.abs(left - right) > 1) {
        console.log('Tree is not balanced at ' + node.data + ' left height: ' + left + ' right height : ' + right);
    } 
    
    isBalanced(node.left);
    isBalanced(node.right);
    
}

function measureHeight(node = tree.root) {

    if (node === null) {
        return 0;
    }

    tempLongest++;

    
    measureHeight(node.left);
    measureHeight(node.right);
    
    if (longestPath < tempLongest) {
        longestPath = tempLongest;
    }

    tempLongest--;

    return longestPath;

}

function reset() {
    longestPath = 0;
    tempLongest = 0;
}

 
export {isBalanced}