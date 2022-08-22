
class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}

const zipperList = (head1, head2) => {
    // head a->b->c->d->e tail
    // head x->y->z tail

    // a->x->b->y->c->z->d->e

    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    let final = head1;

    let next1 = head1.next;
    let next2 = head2; // will be filled next as head1 was already used
    let count = 0;

    while(next1 !== null && next2 !== null){
        if(count % 2 === 0){
            final.next = next2;
            next2 = next2.next;
        } else {
            final.next = next1;
            next1 = next1.next;
        }

        final = final.next;
        count = count + 1;
    }

    if(next1 !== null) final.next = next1;
    if(next2 !== null) final.next = next2;

    return head1;
};


const zipperListRecursive = (head1, head2) => {
    // head a->b->c->d->e tail
    // head x->y->z tail

    // a->x->b->y->c->z->d->e

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