const { max } = require("lodash");

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   

// for path finders ITERATIVE will not be optimal solutions as the need to maintain branches' state will cost lots of space
// for path finding APPROACH will be the preferred way
const depthFirstRecursiveMaxRootToLeafPath = (root) => {
    
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    
    return root.val + Math.max(depthFirstRecursiveMaxRootToLeafPath(root.left), depthFirstRecursiveMaxRootToLeafPath(root.right));
};


const a = new Node(9);
const b = new Node(10);
const c = new Node(11);
const d = new Node(1);
const e = new Node(7);
const f = new Node(3);

// conside a as root
// important no node can have two parents
a.left  = b;
a.right = c;
b.left  = d;
b.right = e;
c.right = f;

console.log("MaxRootToLeafPath DFT Stack Recursive:", depthFirstRecursiveMaxRootToLeafPath(a));

//      A(9)
//      / \
//   B(10) C(11)
//    /\    \
// D(1) E(7) F(2)
// maxPath = A,B,E = 26
