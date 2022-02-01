class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const mergeSort = (h) => {
    // Base case : if head is null
    if (h == null || h.next == null) {
        return h;
    }

    // get the middle of the list
    var middle = getMiddle(h);
    var nextofmiddle = middle.next;

    // set the next of middle node to null
    middle.next = null;

    // Apply mergeSort on left list
    var left = mergeSort(h);

    // Apply mergeSort on right list
    var right = mergeSort(nextofmiddle);

    // Merge the left and right lists
    var sortedlist = sortedMerge(left, right);
    return sortedlist;
};

// Utility function to get the middle
// of the linked list
const getMiddle = (head) => {

    if(head === null) return;

    let fast = head; // iterator, should have two next nodes in order to move and moves two positions ahead.
    let slow = head; // mid-point, and moves one place forward when fast pointer moves two places forward

    // if there are 2 nodes -> slow is already at mid-point(1)
    // if there are 3 nodes -> fast moves two places, slow moves one place to reach mid-point(2)
    // if there are 4 nodes -> fast moved two places, slow moves one place to reach mid-point(2)
    // if there are 5 nodes -> fast moves twice and two places each times, slow moves twice and one node each time to reach mid-point(3)
    // and so on..
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const sortedMerge = (a, b) =>{
    var result = null;
    /* Base cases */
    if (a == null)
        return b;
    if (b == null)
        return a;

    /* Pick either a or b, and recur */
    if (a.val <= b.val) {
        result = a;
        result.next = sortedMerge(a.next, b);
    } else {
        result = b;
        result.next = sortedMerge(a, b.next);
    }

    //TODO: Apply while condition -> avoid recursion
    
    return result;
};


// misc stuff
var head = null;
const push = (new_data) => {
    /* allocate node */
    var new_node = new Node(new_data);

    /* link the old list off the new node */
    new_node.next = head;

    /* move the head to point to the new node */
    head = new_node;
};

// Utility function to print the linked list
const printList = (headref) => {
    while (headref != null) {
        console.log(headref.val + " ");
        headref = headref.next;
    }
}
     
  
/*
Let us create a unsorted linked
list to test the functions
created. The list shall be
a: 2->3->20->5->10->15
*/
push(15);
push(10);
push(5);
push(11);
push(0);
push(1);
push(3);
push(7);
push(2);
push(20);
push(33);
push(9);
push(3);

// Apply merge Sort
head = mergeSort(head);
printList(head);


// const head = new Node(10);
// head.next = new Node(30);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(20);
// head.next.next.next.next.next = new Node(5);

// const first = new Node(1);
// first.next = new Node(2);
// first.next.next = new Node(4);
// first.next.next.next = new Node(9);
// first.next.next.next.next = new Node(5);
// first.next.next.next.next.next = new Node(7);
// first.next.next.next.next.next.next = new Node(8);
// first.next.next.next.next.next.next.next = null;

// const second = new Node(3);
// second.next = new Node(6);
// second.next.next = new Node(9);
// second.next.next.next = new Node(4);
// second.next.next.next.next = new Node(9);
// second.next.next.next.next.next = null;
// console.log(printList(sortedMerge(first, second)));