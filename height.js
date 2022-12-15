'use strict';

import {tree} from './main.js';


let longest = 0;
let tempLongest = 0;
let tempRoot = null;
let leaf = null;
let keepRoot = false;

function height(n = null, node = tree.root) {

    if (node === null) {
        return;
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
    if (keepRoot === false) {
        tempRoot = node;
        keepRoot = true;
    }

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
    
    if (node !== tempRoot) {
        return;
    }
    
    return console.log(`Longest path of node '${tempRoot.data}' is ${longest} ending at leaf : `, leaf);
}

export {height};