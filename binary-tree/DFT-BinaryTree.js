const { sample } = require("lodash");

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}          


const depthFirstTraversalRecursive = (root) => {

    if(!root) return [];

    let leftValues = depthFirstTraversalRecursive(root.left);
    let rightValues = depthFirstTraversalRecursive(root.right);

    return [...root.val, ...leftValues, ...rightValues];
    
};

const depthFirstTraversal  = (root) => {

    if(!root) return []

    let traversals = [];

    let stack = [root];

    while(stack.length > 0) {

        let node = stack.pop();

        if(node.val) traversals.push(node.val);

        if(node.left) stack.push(node.left);

        if(node.right) stack.push(node.right);

    }

    return traversals;
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

console.log("Traversal:", depthFirstTraversal(a));
console.log("Traversal Recursive:", depthFirstTraversalRecursive(a));
//       A
//      / \
//     B   C
//    /\    \
//   D  E    F

//    ORDER = a,b,d,e,c,f (left first)
//    ORDER = a,c,f,b,e,d (right first)

//     null-------------------- null     
//                             d(visited) + (popped)
//      d  --------------------
//                             e(visited) + (popped)
//     d,e -------------------
//                             b(visited) + (popped) + (childen-pushed)
//      b  -------------------
//                             f(visited) + (popped)
//     b,f -------------------
//                             c(visited) + (popped) + (childen-pushed)
//     b,c -------------------
//                             a(visited) + (popped) + (childen-pushed)
//      a --------------------                       
// ------------            ------------
//    Stack                 current