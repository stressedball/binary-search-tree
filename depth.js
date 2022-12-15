'use strict';
import {tree} from './main.js';

let count = 0;
function depth(n = null, node = tree.root) {

    if (node === null) {
        return;
    }

    if (n === null) {
        n = node.data;
    }

    if (node.data < n) {
        depth(n, node.right);
    }
    if (node.data > n) {
        depth(n, node.left);
    }

    if (node !== tree.root) {
        count++;
        return;
    }

    return console.log(`Depth of ${n} is ${count}`);

}

export {depth};