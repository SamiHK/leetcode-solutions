class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}

const iterativeReverselinkedNode = (head) => {
	let current = head;
    let previous = null;
	while(current != null) {
        let next = current.next;
		current.next = previous;
        previous = current;
        current = next;
	}
    return previous; // tail becomes head and vice versa
};

// null ----> a ------> b --------> c --------> null
// prev ---->curr------>next

const recursiceReverselinkedNode = (head, previous = null) => {
    if(head === null) return previous;
    const next = head.next;
    head.next = previous;
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