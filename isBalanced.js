'use strict';

// Write a isBalanced function which checks if the tree is balanced. 

// A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

let left = null;
let right = null;
let tempHighest = 0; // temp height for every iteration
let highestPath = 0; // keeps track of the highest path
let keepRoot = false;
let root = null;
let printMessage = '';

function isBalanced(node) {

    if (node === null) {
        return;
    }

    if (keepRoot === false) {
        root = node;
        keepRoot = true;
    }

    // we start from root node
    left = measureHeight(node.left); // we get its left subtree height
    reset(); // we make sure to reset the global variables

    right = measureHeight(node.right); // we get its right subtree height
    reset();

    // if difference between left and right height is greater than 1; tree is unbalanced
    if (Math.abs(left - right) > 1) {
        printMessage += 'Tree is not balanced at ' + node.data + ' left height: ' + left + ' right height : ' + right + '\n';
    } 

    isBalanced(node.left); // we recursively do the same for left
    isBalanced(node.right); // and right
    
    if (node !== root) { // we go to last return to avoid multiple console.log
        return;
    }

    if (printMessage === '') {
        console.log('Tree is balanced');
        return;
    }

    console.log(printMessage);
    printMessage = '';
    keepRoot = false


}


// to measure height
function measureHeight(node = tree.root) {

    if (node === null) {
        return 0;
    }

    tempHighest++; // we increment the temp height

    measureHeight(node.left); // we get the height for left subtree
    measureHeight(node.right); // we get height for right subtree
    
    // we store the temp highest 
    if (highestPath < tempHighest) {
        highestPath = tempHighest;
    }

    // when returning to previous node, we make sure to decrement to get correct height
    tempHighest--;

    // finally we return the highest path found in the subtree
    return highestPath;

}

function reset() {
    highestPath = 0;
    tempHighest = 0;
}

 
export {isBalanced}