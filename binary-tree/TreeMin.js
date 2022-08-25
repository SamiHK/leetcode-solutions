class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   

const  breadthFirstFindMin = (root) => {
    
    if(root === null) return 0;

    const queue = [root];
    
    let min = Infinity;

    while(queue.length > 0){
        const current = queue.shift();
        
        if(current.val < min) min = current.val;

        if(current.left !== null) queue.push(current.left); 
        if(current.right !== null) queue.push(current.right); 
    }

    return (min === Infinity) ? -1 : min;
};



const  depthFirstFindMin = (root) => {
    if(root === null) return 0;

    const stack = [root];
    let min = Infinity;

    while(stack.length > 0){
        const current = stack.pop();
        if(current.val < min) min = current.val;

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return (min === Infinity) ? -1 : min;
};

const depthFirstRecursiveFindMin = (root) => {
   if(root === null) return Infinity;
   let lv = depthFirstRecursiveFindMin(root.left);
   let rv = depthFirstRecursiveFindMin(root.right);
   return Math.min(root.val, lv, rv);
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

console.log("FindMin BFT Queue:", breadthFirstFindMin(a));
console.log("FindMin DFT Stack:", depthFirstFindMin(a));
console.log("FindMin DFT Stack Recursive:", depthFirstRecursiveFindMin(a));

//      A(9)
//      / \
//   B(10) C(11)
//    /\    \
// D(1) E(7) F(2)
// sum = 9+10+11+1+7+2 = 41
// min = 1
