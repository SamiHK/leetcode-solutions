class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// assuming we do not have cycles
const iterativeDetectMiddleOflinkedList = (head) => {

    if(head === null) return null;
    if(head.next === null) return head;

    let fast = head // will iterate over twice as fast
    let slow = head // mid-point, will iterate at normal speed

    while(fast !== null){
        slow = slow.next
        fast = fast.next.next;
    }
    
    return slow;
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


// ITERATIVE
// n = # of nodes
// Time = O(n)
// Space = O(1) ----> Preffered way 
console.log(iterativeDetectMiddleOflinkedList(a));