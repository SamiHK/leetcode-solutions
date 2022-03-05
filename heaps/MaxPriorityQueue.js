/**
 * Helper methods for finding heap's left, right and root node
 */
const leftChild = (index) => index * 2 + 1;
const rightChild = (index) => index * 2 + 2;
const parent = (index) => Math.floor((index - 1) / 2);

/**
 * 
 * @param {*} indexOne 
 * @param {*} indexTwo 
 * @description swaps two idexes of an array
 */
const swap = (maxQueue, indexOne, indexTwo) => {
    [maxQueue[indexOne], maxQueue[indexTwo]] = [maxQueue[indexTwo], maxQueue[indexOne]];
    return maxQueue;
}

/**
 * @description the root is always the highest priority item
 */
const peek = (maxQueue) => {
    return maxQueue[0];
}
/**
 * 
 * @param {*} element 
 */
const insert = (maxQueue, element) => {
    
    maxQueue.push(element);

    let index = maxQueue.length -1;

    // if the element is greater than its parent:
    // swap element with its parent
    while(index !== 0 && maxQueue[index] > maxQueue[parent(index)]){
        swap(index, parent(index));
        index = parent(index);
    }

    return maxQueue;
}

/**
 * 
 * @param {*} index
 * @param boolean isMaxHeap
 * @description puts the priority element back to the top 
 */
const heapify = (maxQueue, index) => {

    let left = leftChild(index);
    let right = rightChild(index);
    let smallest = index;


    if(left < maxQueue.length && maxQueue[smallest] < maxQueue[left]){
        smallest = left;
    }

    if(right < maxQueue.length && maxQueue[smallest] < maxQueue[right]){
        smallest = right;
    }

    if(smallest !== index) {
        swap(smallest, index);
        heapify(smallest);
    }

    return maxQueue;
}


/**
 * @description returns the max of the heap
 */
const extractMax = (maxQueue) => {

    if(maxQueue.length === 0) return;

    const root =  maxQueue.shift();

    maxQueue.unshift(maxQueue[maxQueue.length-1]);
    
    maxQueue.pop();

    heapify(0);

    return root;
}


let maxQueue = [];
maxQueue = insert(7);
maxQueue = insert(4);
maxQueue = insert(3);
maxQueue = insert(6);
maxQueue = insert(9);
maxQueue = insert(10);
maxQueue = insert(17);

console.log(maxQueue, extractMax(maxQueue));
