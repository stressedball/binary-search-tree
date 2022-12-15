'use strict';

import {Node, tree} from './main.js';

function insert(n, node = tree.root) {
    if (node === null) {
        node = new Node(n);
        return node;
    }
    
    if (node.data === n) {
        console.log('No duplicates');
        return node;
    }
    
    if (node.data < n) {
        node.right = insert(n, node.right);
        return node;

    } else if (node.data > n) {
        node.left = insert(n, node.left);
        return node;
    }

}

function deleteNode(n, node = tree.root) { 
    // you need to code the root delete case

    if (node.data > n) {
        node.left = deleteNode(n, node.left);
        return node;
    } else if (node.data < n) {
        node.right = deleteNode(n, node.right);
        return node;
    }
    
    return deleteHelper(node);
}

// local function
function deleteHelper(node) {

    if (node.left === null && node.right === null) {
        return null;
    }

    if (node.left === null && node.right !== null) {
        return node.right;
    }

    if (node.right === null && node.left !== null) {
        return node.left;
    }

    // we know at this point that node has right and left children
    // select next right node
    const rightNode = node.right;
    let targetLeft = rightNode;
    
    while (targetLeft.left !== null) {
        targetLeft = targetLeft.left;
    }
    
    // TO AVOID A MESS?
    if (rightNode.left === null) {
       rightNode.left = node.left;
       return targetLeft; 
    }
    
    // if rightnode is normal (populated)
    rightNode.left = targetLeft.right;
    targetLeft.right = rightNode;
    targetLeft.left = node.left;
    return targetLeft;
}

function find(n, node = tree.root) {

    if (node === null) {
        return console.log('Value does not exist');
    }

    if (node.data === n) {
        return console.log(node);
    }

    if (node.data < n) {
        find(n, node.right);
        return;
    }

    if (node.data > n) {
        find(n, node.left);
        return;
    }

    return;

}


export {deleteNode, find, insert};