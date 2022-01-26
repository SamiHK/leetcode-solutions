class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}          


const depthFirstTraversalRecursive = (root) => {
    
    if(!root) return [];

    const leftValues =  depthFirstTraversalRecursive(root.left); //b,d,e
    const rightValues =  depthFirstTraversalRecursive(root.right);// c,f

    return [root.val, ...leftValues, ...rightValues];
};

const depthFirstTraversal  = (root) => {

    if(!root) return [];
    const traversals = [];
    const stack = [root];
    
    while(stack.length > 0){
        const current = stack.pop();
        traversals.push(current.val);
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left); // if you push left first then it would be on top of next iteration, vice versa
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