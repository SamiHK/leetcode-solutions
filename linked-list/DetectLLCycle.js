class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const iterativeDetectCyclelinkedList = (head) => {

    if(head === null) return false;
    if(head.next && head.next.next && head.next.next === head) return true; // cycle a->b->a

    let slow = head.next;
    let fast = head.next.next;
    while(slow !== null && fast !== null) {
        if(slow.val === fast.val) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};

var a =  new Node('a');
var b =  new Node('b');
var c =  new Node('c');
var d =  new Node('d');
var e =  new Node('e');
var f =  new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// cycle
f.next = a;

// ITERATIVE
// n = # of nodes
// Time = O(n)
// Space = O(1) ----> Preffered way 
console.log(iterativeDetectCyclelinkedList(a));