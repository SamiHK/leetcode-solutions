class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   

const  breadthFirstFind = (root, target) => {
    if(root === null) return false;

    const queue = [root];

    while(queue.length > 0){
        const current = queue.shift();
        if(current.val === target) return true;

        if(current.left !== null) queue.push(current.left); 
        if(current.right !== null) queue.push(current.right); 
    }

    return false;
};



const  depthFirstFind = (root, target) => {
    if(root === null) return false;

    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();
        if(current.val === target) return true;
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return false;
};

const depthFirstRecursiveFind = (root, target) => {
    
    if(root === null) return false;
    if(root.val === target) return true;

    const leftValues = depthFirstRecursiveFind(root.left, target);
    const rightValues = depthFirstRecursiveFind(root.right, target); 

    return leftValues || rightValues;
};


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


// conside a as root
// important no node can have two parents
a.left  = b;
a.right = c;
b.left  = d;
b.right = e;
c.right = f;

console.log("Find BFT Queue:", breadthFirstFind(a, 'e'));
console.log("Find DFT Stack:", depthFirstFind(a,'e'));
console.log("Find DFT Stack Recursive:", depthFirstRecursiveFind(a,'e'));

console.log("Find BFT Queue:", breadthFirstFind(a, 'z'));
console.log("Find DFT Stack:", depthFirstFind(a,'z'));

//       A
//      / \
//     B   C
//    /\    \
//   D  E    F
