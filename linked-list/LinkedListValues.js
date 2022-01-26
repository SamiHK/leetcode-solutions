class Node{
	constructor(val)
	{
		this.val = val;
		this.next = null;
	}
}


const linkedListValues = (head) => {
	const values = [];
	let current = head;
	while(current != null) {
		values.push(current.val);
		console.log(current.val);
		current = current.next;
	}
};

const linkedListValuesRecusive = (head) => {
	const values = [];
	fillValues(head, values);
	return values;
};

const fillValues = (head, values) => {
	if(head === null) return;
	values.push(head.val);
	console.log(head.val);
	fillValues(head.next, values);
};


const a =  new Node('A');
const b =  new Node('B');
const c =  new Node('C');
const d =  new Node('D');

a.next = b;
b.next = c;
c.next = d;



console.log(linkedListValues(a));

console.log(linkedListValuesRecusive(a));