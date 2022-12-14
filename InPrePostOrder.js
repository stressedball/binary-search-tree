// DEPTH FIRST TRAVERSAL
// USES STACKS

'use strict';
import { tree } from "./main.js";

let array = [];
// preorder : root left right
function preorder(n, node = tree.root) {
    
    if (node === null) {
        return;
    }

    let printOut = '';
    printOut += 'Root ' + node.data + ' -> ';
    if (node.left !== null) {
        printOut += ' Left ' + node.left.data + ' -> ';
    } else {
        printOut += ' Left ' + node.left + ' -> ';
    }
    if (node.right !== null) {
        printOut += ' Right ' + node.right.data;
    } else {
        printOut += ' Right  ' + node.right;
    }
    
    array.push(printOut);

    // console.log(printOut);
    if (n === node.data) {
        return;
    }
    
    preorder(n, node.left);
    preorder(n, node.right);

    // I keep needing conditions to avoid the stack returns
    if (node !== tree.root) {
        return;
    }
    
    return console.log(array);
}

// inorder : left root right
function inorder(n, node = tree.root) {

    if (node === null) {
        return;
    }

    let printOut = '';
    if (node.left !== null) {
        printOut += ' Left ' + node.left.data + ' -> ';
    } else {
        printOut += ' Left ' + node.left + ' -> ';
    }

    printOut += 'Root ' + node.data + ' -> ';

    if (node.right !== null) {
        printOut += ' Right ' + node.right.data;
    } else {
        printOut += ' Right  ' + node.right;
    }

    array.push(printOut);

    // console.log(printOut);
    if (n === node.data) {
        return;
    }

    inorder(n, node.left);
    inorder(n, node.right);

    // I keep needing conditions to avoid the stack returns
    if (node !== tree.root) {
        return;
    }
    
    return console.log(array);
}

// postorder : left right root
function postorder(n, node = tree.root) {
    if (node === null) {
        return;
    }

    let printOut = '';
    if (node.left !== null) {
        printOut += ' Left ' + node.left.data + ' -> ';
    } else {
        printOut += ' Left ' + node.left + ' -> ';
    }

    if (node.right !== null) {
        printOut += ' Right ' + node.right.data + ' -> ';
    } else {
        printOut += ' Right  ' + node.right + ' -> ';
    }
    
    printOut += 'Root ' + node.data;
    
    array.push(printOut);
    // console.log(printOut);
    if (n === node.data) {
        return;
    }
    
    postorder(n, node.right);
    postorder(n, node.left);

    // I keep needing conditions to avoid the stack returns
    if (node !== tree.root) {
        return;
    }
    
    return console.log(array);
}

export {inorder, postorder, preorder};