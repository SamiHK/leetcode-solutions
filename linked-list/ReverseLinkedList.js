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
const iterativeReverselinkedNode = (head) => {
    let prev = null;
    if(head === null) return prev;

    let curr = head;
    let next = curr.next;

    while(head != null){
        curr.next = prev;
        prev = curr;

        head = head.next
        curr = head;
    } 

    return prev;
};

const recursiceReverselinkedNode = (head, previous = null) => {
    if(head === null) return previous;
    // null ----> a ------> b --------> c ----> d ----> e -----> null
    const next = head.next; // b
    head.next = previous; // null 
    return recursiceReverselinkedNode(next, head);
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
console.log(iterativeReverselinkedNode(a));

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
console.log(recursiceReverselinkedNode(a));