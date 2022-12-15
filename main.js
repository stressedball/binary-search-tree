'use strict';

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

// class should accept an array when initialized
// doesn't do much beside make tree accessible from a root point
class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
}

function buildTree(array) {
    
    array = removeDuplicates(array); 
    mergeSort(array); 
    return makeTree(array);
}

function makeTree(array) {
    const mid = Math.trunc(array.length / 2);
    
    if (mid >= array.length) {
        return null;
    }
    
    const node = new Node(array[mid]);
    node.left = makeTree(array.slice(0, mid));
    node.right = makeTree(array.slice(mid + 1, array.length));

    return node;
}

function mergeSort(array) {
   
    // if mid is 8.5 mid is 8
    const mid = Math.trunc(array.length / 2);

    if (mid < 1) {
        return;
    }

    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    mergeSort(left);
    mergeSort(right);
    
    merge(array, left, right, mid);

    return array;
}

function merge(array, left, right, mid) {
    let iLeft = 0;
    let iRight = 0;

    const tempArray = [];

    while (iLeft < mid && iRight < array.length - mid) {
        if (left[iLeft] < right[iRight]) {
            tempArray.push(left[iLeft]);
            iLeft++;
        } else {
            tempArray.push(right[iRight]);
            iRight++;
        }
    }

    while (iLeft < mid) {
        tempArray.push(left[iLeft]);
        iLeft++;
    }
    
    while (iRight < array.length - mid) {
        tempArray.push(right[iRight]);
        iRight++;
    }

    for (let i = 0; i < tempArray.length; i++) {
        array[i] = tempArray[i]; 
    }

}

function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (array.filter(el => el === value).length > 1) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}


export {buildTree, makeTree, merge, mergeSort, 
    prettyPrint, Tree, Node};