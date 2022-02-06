// How to know if we can heapify a Tree/Array Data Structure??
// Ans: the parents must have two valid children

// following are some interesting formulae

// if a Node is at index (i)
//     a. Its left child will be at 2*(i)
//     b. Its right child will be at 2*(i) + 1
//     c. Its parent will be CEIL[i/2]
// If height of binary tree is (h) then, a full-binary-tree will have [ 2(power(h+1)) - 1 ] nodes 
// If the array representation of binary tree does not have missing elements then it is a complete binary tree.
// A complete binary tree is a Full-Binary Tree with height upto (h-1), on last level the elements are filled from left-to-right.
// the height of complete binary tree will be *log(n)*

//        a
//     /     \
//    b       c
//   /   \   
// d      e  

// arr = [A,B,C,D,E]
// 1,2,3,4,5



// array representation of Heap(min / max);
// if we fill the tree in an array and it does-not have any blank spaces then in this case the heapified
// if there are blank spaces then the tree cannot be heapified.
// for a tree to be heapified it must be a complete-binary-tree i.e. correctly filled from left to right
// Full-binary-trees no need for checking they have all the childrens and last level is completely filled.

// Insertion at last node -> compare with parent (In max heap check if parent is greater else replace, vice versa)
// Deletion at root node -> deleted node will no longer be a part of heap and can be replaced with last node, heap size reduces
//                          (in Max-heap) if the new root-node is smaller than check with child of greater value and replace
// If we delete complete tree then the result is a sorted array 



/*
ALGORITHM:
    heapify(array)
        Root = array[0]
        Largest = largest( array[0] , array [2 * 0 + 1]. array[2 * 0 + 2])
        if(Root != Largest)
            Swap(Root, Largest)
*/
// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap


/**
 * GeeksforGeeks defination:
 * How to “heapify” a tree?

    The process of reshaping a binary tree into a Heap data structure is known as ‘heapify’. 
    A binary tree is a tree data structure that has two child nodes at max. 
    If a node’s children nodes are ‘heapified’, then only ‘heapify’ process can be applied over that node. 
    A heap should always be a complete binary tree. 

    Starting from a complete binary tree, we can modify it to become a Max-Heap by running a function called ‘heapify’ 
    on all the non-leaf elements of the heap. i.e. ‘heapify’ uses recursion.
 * 
 * **/
const heapify = (arr, n, i) => {

    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if(arr[left] > arr[largest] && left < n){
        largest = left;
    }


    // If right child is larger than root
    if(arr[right] > arr[largest] && right < n){
        largest = right;
    } 

    // if largest is not a root
    if(largest !== i){
        // swap root and largest values
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify (arr, n, largest);
    }

    // optional
    return arr;
};


/*
    GeeksforGeeks defination:
    Heap Sort Algorithm for sorting in increasing order: 
    1. Build a max heap from the input data. 
    2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by
         reducing the size of heap by 1. Finally, heapify the root of the tree. 
    3. Repeat step 2 while the size of the heap is greater than 1.
*/
const heapSort = (arr) => {

    let n = arr.length;

    // build the Max-Heap
    // Build heap (rearrange array)
    // remember this: when we need to heapify
    // the best heapification case is when we heapify from middle

    // consider if a tree is represented in array form, then middle of array is root,
    // we need to heapify until the root is at first node
    for(let root = Math.floor(n/2) - 1;  root >= 0; root--){
        heapify(arr, n, root);
    }


    // two ways to sort and array if it is a max-heap
    // remove root - replace it with last node and heapify the shrinked heap.
    for (let i = n - 1; i >= 0; i--) {

        // move current root to end
        let tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

};


// Note Insertion can mis-arrange the sort order.
const heapInsert = (arr, n, key) =>{

    // Increase the size of Heap by 1
    n = n + 1;
 
    // Insert the element at end of Heap
    arr[n - 1] = key;
 
    // Heapify the new node following a
    // Bottom-up approach
    heapify(arr, n, n - 1);
};

// Note: deletion always happens at the root-node, root is replaced with last node
// Note: deleting complete min-heap gives array in ascending order sorting
// Note: delting complete max-heap gives array in descending order sorting
const heapDelete = (arr, n) => {

    // optional to keep the last root node in array - if you keep doing deletion until heap is deleted and keep storing elements
    // at the very next node after heap boundary, elements becomes sorted
    let tmp = arr[0];  // (optional)

    // Get the last element
    let lastElement = arr[n - 1];    arr[n-1] = tmp; // -< optional to replace
   
    // Replace root with first element
    arr[0] = lastElement;

    // Decrease size of heap by 1
    n = n - 1;

    // heapify the root node
    heapify(arr, n, 0);

    // return new size of Heap
    return n;
};

var arr = [5, 12, 11, 13, 4, 6, 7 ];

// heapify - heap sort
console.log("Heapify - max heap", heapify(arr, arr.length, 0));
console.log("Heap Sort - using heapify", heapSort(arr), arr);

console.log("Heap Insertion - max heap", heapInsert(arr, arr.length, 20), arr);
console.log("Heap Deletion - max heap", heapDelete(arr, arr.length), arr);