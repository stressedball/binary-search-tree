'use strict';

import {tree} from './main.js';

let head = null;

function levelOrder(node = tree.root) {
    if (node === null) { // root node check
        return;
    }

    let count = 0;

    enqueue(node); // tree.root

    while (getQueue() !== null) {
        let tempArray = [];
        let printArray = [];
        let target = head;

        while (target !== null) {
            printArray.push(target.data);

            if (target.left !== null) {
                tempArray.push(target.left);
            }

            if (target.right !== null) {
                tempArray.push(target.right);
            }

            target = target.next;
        }

        console.log(`Level ${count} `, printArray); // printing the level
        count++;

        emptyQueue(); // all nodes in the queue have been printed

        // condition statement to avoid loop enqueuing empty array
        if (tempArray < 1) { 
            return;
        }

        for (let i = 0; i < tempArray.length; i++) {
            enqueue(tempArray[i]);
        }
    }

}

const emptyQueue = () => {
    head = null;
    return;
}

const enqueue = (node) => {

    if (head === null) {
        head = node;
        head.next = null;
        return;
    }

    let target = head;
    while (target.next !== null) {
        target = target.next;
    }

    target.next = node;
    node.next = null;
}

const getQueue = () => {
    let array = [];
    let target = head;

    while(target !== null) {
        array.push(target.data);
        target = target.next;
    }

    return array;
}

export {levelOrder};