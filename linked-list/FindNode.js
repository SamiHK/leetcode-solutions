class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}


const iterativeFindlinkedList = (head, target) => {
	let current = head;
	while(current != null) {
		if(current.val === target) return true;
		else current = current.next;
	}
    return false;
};

const recursiceFindlinkedList = (head, target) => {
    if(head === null) return false;
	if(head.val === target) return true;
	return recursiceFindlinkedList(head.next, target);
};


const a =  new Node(2);
const b =  new Node(8);
const c =  new Node(3);
const d =  new Node(7);

a.next = b;
b.next = c;
c.next = d;


// ITERATIVE
// n = # of nodes
// Time = O(n)
// Space = O(1) ----> Preffered way 
console.log(iterativeFindlinkedList(a, 7));
console.log(iterativeFindlinkedList(a, 100));


// RECURSICE
// n = # of nodes
// Time = O(n)
// Space = O(n) -> considering call stack here
console.log(recursiceFindlinkedList(a, 7));