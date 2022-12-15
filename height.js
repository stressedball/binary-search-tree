'use strict';

let longest = 0;
let tempLongest = 0;
let root = null;
let leaf = null;
let keepRoot = false;

function height(n = null, node) {

    if (node === null) {
        return;
    }

    if (keepRoot === false) {
        root = node;
        keepRoot = true;
    }

    if (n !== null) {
        if (n > node.data) {
            height(n, node.right);
            return;
        }
        if (n < node.data) {
            height(n, node.left);
            return;
        }
    }

    // either no numbers were passed or we have the correct nodes
    // we need to store the root value and keep it for the end

    n = null;

    tempLongest++;

    height(n, node.left);
    height(n, node.right);
    
    tempLongest--;
    
    if (tempLongest > longest) {
        longest = tempLongest;
        leaf = node;
        return;
    }
    
    if (node !== root) {
        return;
    }
    
    keepRoot = false;
    leaf = null;
    tempLongest = 0;
    root = null;
    longest = 0;

    return console.log(`Longest path of node '${root.data}' is ${longest} ending at leaf : `, leaf);
}

export {height};