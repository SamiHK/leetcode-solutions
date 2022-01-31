class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const linearSearch = (target, values) => {

    if(values.length === 0) return false;
    if(target === null) return false;

    for(let i = 0; i < values.length; i++){
        if(target === values[i])
        return true;
    }

    return false;
};


const linearSearchLList = (target, head) =>{
    if(head  === null || head.val === null) return false;
    if(target === null) return false;


    while(head.next !== null) {
        if(target === head.val) return true;
        else head = head.next;
    }

    return false;
};

console.log(linearSearch(7,[1,2,5,7,2,8,2]));
console.log(linearSearch(100,[1,2,5,7,2,8,2]));
console.log(linearSearch('a',['c','d','f','a']));


const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
a.next = b; b.next = c; c.next =d;


const aa = new Node('a');
const bb = new Node('b');
const cc = new Node('c');
const dd = new Node('d');
const ee = new Node('e');
aa.next = bb; bb.next = cc; cc.next =dd; dd.next = ee;

console.log(linearSearchLList(3, a));
console.log(linearSearchLList(5, a));
console.log(linearSearchLList('a', aa));
console.log(linearSearchLList('z', aa));


/*
Time = O(n)
Space = O(n)
*/