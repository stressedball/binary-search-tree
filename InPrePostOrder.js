// DEPTH FIRST TRAVERSAL
// USES STACKS

'use strict';

let array = [];
let keepRoot = false;
let root = null;

// preOrder : root left right
function preOrder(n, node) {
    
    if (node === null) {
        return;
    }

    if (keepRoot === false) {
        keepRoot = true;
        root = node;
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
    
    preOrder(n, node.left);
    preOrder(n, node.right);

    // I keep needing conditions to avoid the stack returns
    if (node !== root) {
        return;
    }

    keepRoot = false;
    root = null;
    
    return console.log(array);
}

// inOrder : left root right
function inOrder(n, node) {

    if (node === null) {
        return;
    }

    if (keepRoot === false) {
        keepRoot = true;
        root = node;
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

    inOrder(n, node.left);
    inOrder(n, node.right);

    // I keep needing conditions to avoid the stack returns
    if (node !== root) {
        return;
    }

    keepRoot = false;
    root = null;
    
    return console.log(array);
}

// postOrder : left right root
function postOrder(n, node) {
    if (node === null) {
        return;
    }

    if (keepRoot === false) {
        keepRoot = true;
        root = node;
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
    
    postOrder(n, node.right);
    postOrder(n, node.left);

    // I keep needing conditions to avoid the stack returns
    if (node !== root) {
        return;
    }

    keepRoot = false;
    root = null;
    
    return console.log(array);
}


export {inOrder, postOrder, preOrder};