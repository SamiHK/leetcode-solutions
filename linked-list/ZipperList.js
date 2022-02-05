
class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}

const zipperList = (head1, head2) => {
    
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while(current1 !== null && current2 !== null){
        if(count % 2 === 0){
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }

        tail = tail.next;
        count += 1;
    }

    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;

    return head1;
};


const zipperListRecursive = (head1, head2) => {
    
    if(head1 === null && head2 === null) return null;

    if(head1 === null) return head2;
    if(head2 === null) return head1;
    
    const next1 =  head1.next;
    const next2 =  head2.next;
    
    head1.next = head2;
    head2.next = zipperListRecursive(next1, next2);

    return head1;
};

const a  = new Node('a');
const b  = new Node('b');
const c  = new Node('c');
const d  = new Node('d');
const e  = new Node('e');
a.next = b; b.next = c; c.next = d; d.next = e;
// a->b->c->d->e

const x  = new Node('x');
const y  = new Node('y');
const z  = new Node('z');
x.next = y; y.next = z;
// x->y->z

console.log(zipperList(a,x));
// ANSWER - ITERATIVE
// a->x->b->y->c->z->d->e

// console.log(zipperListRecursive(a,x));
// ANSWER - RECURSIVE
// a->x->b->y->c->z->d->e



// start from first node of list1 and then first node of list 2, then second node of list1 and then second node of list .. 
// continue untill any list is exhausted or both are zipped interchangeably.
// calculate the count of list

// head1
//  A   ->   B  ->   C   ->  D   ->  E  ->   F  ->null
//        current1                          tail1

// head2
//  Q  ->   R  ->   S   -> null
//       current2  tail2

// Solved
// A    ->  Q   ->  B  ->   R   ->  C   ->  S   ->  D   ->  E   ->  F   -> null


// Complexity
// ITERATIVE
// n = length of list 1
// m = lenght of list 2
// Time  : O(min(n,m)) ---> some sort of linear runtime.
// Space : O(1)