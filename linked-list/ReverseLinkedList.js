class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}


// ----> a ------> b --------> c ----> d ----> e ----->
// Array Impl [a,b,c,d,e] -> [e,d,c,b,a] XX -> OK

// {null} = prev, a = current, b = next; // ----> a ------> b --------> c ----> d ----> e ----->
// {a->null} = prev, b = current, c = next // null ------x b --------> c ----> d ----> e ----->
// {b->a->null}= prev, c = current, d = next // null ------ null --------x c ----> d ----> e ----->
// {c->b->a->null}= prev, d = current, e = next // null ------ null -------- null ----x d ----> e ----->
// {d->c->b->a->null}= prev, e = current, null = next // null ------ null -------- null ---- null ----> e ----->
// {e->d->c->b->a->null}= prev, null = current, null = next null -> // null ------ null -------- null ---- null ---- null ----- Terminate

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(head === null || head.next == null) return head;
    
    let prev = null;
    let curr = head;
    while(curr !== null){
        
        let next = curr.next;
        
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseListRecursive = (head, prev = null) => {
    
    if(head === null) return prev;
    
    let next = head.next;
    head.next = prev

    return reverseListRecursive(next, head);
};


/**
       null -> 1 -> 2 -> 3 -> 4 -> 5 -> null
       prev  curr  next
       --------------------------------------
       null -> 1 -> 2 -> 3 -> 4 -> 5 -> null
       prev = null, curr = 1, next = 2
       --------------------------------------
       --------------------------------------
       1->null  ->            2 -> 3 -> 4 -> 5 -> null
       prev = 1->null, curr = 2, next = 3
       --------------------------------------
       --------------------------------------
       2->1->null            -> 3 -> 4 -> 5 -> null
       prev  2->1->null, curr = 3, next = 4
       --------------------------------------
       --------------------------------------
       3->2->1->null            -> 4 -> 5 -> null
       prev  3->2->1->null, curr = 4, next = 5
       --------------------------------------
       --------------------------------------
       4->3->2->1->null             -> 5 -> null
       prev  4->3->2->1->null, curr = 5, next = null
       --------------------------------------
       --------------------------------------
       5->4->3->2->1->null          
       prev  5->4->3->2->1->null[answer], curr = null [Reversed]
       --------------------------------------
       
       
        [1,2,3,4,5]
        [1,2]
        []
**/





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
console.log(reverseList(a));

// since list was reversed creating again
a =  new Node('a');
b =  new Node('b');
c =  new Node('c');
d =  new Node('d');
e =  new Node('e');
f =  new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// RECURSICE
// n = # of nodes
// Time = O(n)
// Space = O(n) -> considering call stack here
// console.log(reverseListRecursive(a));