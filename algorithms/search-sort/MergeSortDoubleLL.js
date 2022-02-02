class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


const mergeSortDLL = (head) => {
    
    if(head === null || head.next === null) return head;

    let nextofmiddle = splitDLL(head);

    let left = mergeSortDLL(head); // head -> middle
    let right = mergeSortDLL(nextofmiddle); // nextofmiddle -> tail

    return mergeDLL(left, right);

};


const splitDLL = (head) => {
    
    if(head === null || head.next === null) return head;

    let slow = head;
    let fast = head;

    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next; // middle
        fast = fast.next.next;
    }
    
    let nextofmiddle = slow.next; // next of middle would be head node of new list
    slow.next = null; // cutting the list from middle

    return nextofmiddle;
};


const mergeDLL = (left, right) => {
    //Recursive
    // // If left linked list is empty
    // if (left == null) {
    //     return right;
    // }

    // // If right linked list is empty
    // if (right == null) {
    //     return left;
    // }

    // // Pick the smaller value
    // if (left.data < right.data) {
    //     left.next = merge(left.next, right);
    //     left.next.prev = left;
    //     left.prev = null;
    //     return left;
    // } else {
    //     right.next = merge(left, right.next);
    //     right.next.prev = right;
    //     right.prev = null;
    //     return right;
    // }
    let result = new Node();
    let tail =  result;

    while(left !== null && right !== null) {
        
        if(left.val < right.val) {
            tail.next = left;
            tail.next.prev = tail;
            left =  left.next;
        } else {
            tail.next = right;
            tail.next.prev = tail;
            right =  right.next;
        }
        
        tail = tail.next; // important: move to next for next assignment
    }

    if(left) {
        tail.next = left;
        tail.next.prev = tail;
    }

    if(right){
        tail.next = right;
        tail.next.prev = tail;
    }

    return result.next;
};


const print = (node) => {
    let temp = node;

    console.log("Forward Traversal using next pointer");
    while (node != null) {
        console.log(node.data + " ");
        temp = node;
        node = node.next;
    }

    console.log("Backward Traversal using prev pointer");
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.prev;
    }
};

// Utility function to print the linked list
const printNext = (headref) => {
    console.log("Printing from head to tail");
    let temp = null;
    while (headref != null) {
        console.log(headref.val + " ");
        temp = headref;
        headref = headref.next;
    }

    printPrevious(temp);
};

// Utility function to print the linked list
const printPrevious = (headref) => {
    console.log("Printing from tail to head");
    while (headref != null) {
        console.log(headref.val + " ");
        headref = headref.prev;
    }
};



let head = new Node(10);
head.next = new Node(30);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(20);
head.next.next.next.next.next = new Node(5);
 
let node = null;
node = mergeSortDLL(head);
printNext(node);