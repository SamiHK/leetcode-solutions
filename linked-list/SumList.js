class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}


const iterativeSumlinkedList = (head) => {
	let current = head;
    let sum = 0;
	while(current != null) {
		sum += current.val;
        current = current.next;
	}
    return sum;
};

const recusiveSumlinkedList = (head) => {
    if(head === null) return 0;
	
    return head.val + recusiveSumlinkedList(head.next); // Danng <> o,o 
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
// Space = O(1)
console.log(iterativeSumlinkedList(a));


// RECURSICE
// n = # of nodes
// Time = O(n)
// Space = O(n) -> considering call stack here
console.log(iterativeSumlinkedList(a));