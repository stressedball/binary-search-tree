'use strict';

import {mergeSort, Tree } from "./main.js";

let array = [];
let keepRoot = false;
let root = null;

function reBalance(node) {
    if (node === null) {
        return;
    }

    if (keepRoot === false) {
        root = node;
        keepRoot = true;
    }

    reBalance(node.left);
    reBalance(node.right);
    array.push(node.data);

    if (node !== root) {
        return;
    }

    array = mergeSort(array);
    const newTree = new Tree(array);
    return newTree;

}


export {reBalance};