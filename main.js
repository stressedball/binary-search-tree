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
    
    array = removeDuplicates(array); // removing duplicates
    mergeSort(array); // sorting and merging array
    return makeTree(array);
}

// not needed
function makeTree(array) {
    const end = array.length;
    const mid = Math.floor(end / 2);
    
    if (end < 1) {
        return null;
    }

    let midValue = array[mid];

    const node = new Node(midValue);
    node.left = makeTree(array.slice(0, mid));
    node.right = makeTree(array.slice(mid + 1, end));

    return node;
}

function mergeSort(array) {
   
    const end = array.length;
    let mid = Math.ceil(end / 2);

    if (end <= 1) {
        return;
    }

    const left = array.slice(0, mid);
    const right = array.slice(mid, end);

    mergeSort(left);
    mergeSort(right);
    
    merge(array, left, right, mid, end);
    return array;
}

function merge(array, left, right, mid, end) {
    
    let iLeft = 0;
    let iRight = 0;

    const tempArray = [];

    while (iLeft < mid && iRight < end - mid) {
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
    
    while (iRight < end - mid) {
        tempArray.push(right[iRight]);
        iRight++;
    }

    for (let i = 0; i < tempArray.length; i++) {
        array[i] = tempArray[i]; 
    }

}

function removeDuplicates(array) {
    const uniques = []
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (uniques.length === 0 && uniques[0] === undefined) {
            uniques.push(array[i]);
        } else {
            if (uniques.filter(el => el === value).length === 0) {
                uniques.push(array[i]);
            }
        }
    }
    return uniques;
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

const example = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 154];
// [1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324, 154] // removed duplicates
// [1, 3, 4, 5, 7, 8, 9, 23, 67, 154, 324, 6345] // Sorted
// make new tree from example array
const tree = new Tree(example);


export {prettyPrint, tree, Node};