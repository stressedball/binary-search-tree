'use strict';

let count = 0;
let keepRoot = false;
let root = null;

function depth(n = null, node) {

    if (node === null) {
        return;
    }

    if (n === null) {
        n = node.data;
    }

    if (keepRoot === false) {
        root = node;
        keepRoot = true;
    }

    if (node.data < n) {
        depth(n, node.right);
    }
    if (node.data > n) {
        depth(n, node.left);
    }

    if (node !== root) {
        count++;
        return;
    }

    root = null;
    keepRoot = false;

    return console.log(`Depth of ${n} is ${count}`);

}

export {depth};