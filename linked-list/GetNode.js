class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}


const iterativeGetlinkedNode = (head, index) => {
	let current = head;
    let counter = 0;
	while(current != null) {
		counter += 1;
		current = current.next;
        if(counter === index) return current.val;
	}
    return -1;
};

const recursiceGetlinkedNode = (head, index) => {
    if(head === null) return null;
    if(index === 0) return head.val;
	return recursiceGetlinkedNode(head.next, index - 1);
};


const a =  new Node(2);
const b =  new Node(8);
const c =  new Node(3);
const d =  new Node(7);
const e =  new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


// ITERATIVE
// n = # of nodes
// Time = O(n)
// Space = O(1) ----> Preffered way 
console.log(iterativeGetlinkedNode(a, 3));
console.log(iterativeGetlinkedNode(a, 2));


// RECURSICE
// n = # of nodes
// Time = O(n)
// Space = O(n) -> considering call stack here
console.log(recursiceGetlinkedNode(a, 3));