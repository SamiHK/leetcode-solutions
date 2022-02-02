class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


var mergeKLists = function(lists) {
    
    if(lists === null || lists.length === 0) return null;
        
    for(let i = 0; i < (lists.length -1); i++){ // if there are three elements, then run from 0 to 1 only
        
        lists[i+1] = mergeLists(lists[i], lists[i+1]);
        
    }
    
    return lists[lists.length-1];
};



const mergeLists = (left, right) => {
    
    let result = new Node();
    let tail = result;
    
    
    while(left !== null && right !== null) {
        if(left.val < right.val){
            tail.next =left;
            left = left.next; // move left ahead
        } else {
            tail.next = right;
            right = right.next; // move right ahead
        }
        
        tail = tail.next //move tail ahead
    }
    
    // if left have some nodes remaining
    if(left){
        tail.next = left;
    }
    
    // if right have some nodes remaining
    if(right){
        tail.next = right;
    }
    
    
    // return the frst actual node attached to result.
    return result.next;
    
};




const printList = (headref) => {
    while (headref != null) {
        console.log(headref.val + " ");
        headref = headref.next;
    }
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(6);
head.next.next.next = new Node(7);
head.next.next.next.next = null;

const first = new Node(1);
first.next = new Node(2);
first.next.next = new Node(4);
first.next.next.next = new Node(9);
first.next.next.next.next = null;

const second = new Node(3);
second.next = new Node(6);
second.next.next = new Node(9);
second.next.next.next = null;

var lists = [head, first, second];
console.log(printList(mergeKLists(lists)));

// test cases
// [[1,4,5],[1,3,4],[2,6]]
// [[2],[],[-1]]
// []
// [[]]