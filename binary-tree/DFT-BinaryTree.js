class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}         


const depthFirstTraversalRecursive = (root) => {

    if(root === null) return [];

    let leftValues = depthFirstTraversalRecursive(root.left);
    let rightValues =  depthFirstTraversalRecursive(root.right)
    // PRE-ORDER TRAVERSAL i.e. ROOT, LEFT, RIGHT -> current
    let traversals = [...root.val, ...leftValues , ...rightValues];
    // IN-ORDER TRAVERSAL i.e. LEFT, ROOT, RIGHT
    // POST-ORDER TRAVERSAL i.e. LEFT, RIGHT, ROOT
    return traversals;
};

const depthFirstTraversal  = (root) => {

    if(root === null) return [];

    const traversals = [];

    const stack = [root];

    while(stack.length > 0) {

        // PRE-ORDER TRAVERSAL i.e. ROOT, LEFT, RIGHT
        let node = stack.pop();
        if(node.val) traversals.push(node.val); // root first
        // IN-ORDER TRAVERSAL i.e. LEFT, ROOT, RIGHT
        if(node.left) stack.push(node.left); // then left
        if(node.right) stack.push(node.right); // then right
    }
    // IN-ORDER TRAVERSAL i.e. LEFT, ROOT, RIGHT
    // POST-ORDER TRAVERSAL i.e. LEFT, RIGHT, ROOT

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
console.log("---------------------------------------------")
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