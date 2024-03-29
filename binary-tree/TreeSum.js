class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   

const breadthFirstSum = (root) => {
    if(root === null) return 0

    let sum  = 0;
    const queue = [root];

    while(queue.length > 0){

        let current = queue.shift();
        if(current.val !== null) sum += current.val;

        if(current.right !== null) queue.push(current.right);
        if(current.left !== null) queue.push(current.left);

    }

    return sum;
};



const depthFirstSum = (root) => {

    if(root === null) return 0

    let sum  = 0;
    const stack = [root];

    while(stack.length > 0){

        const current = stack.pop();
        if(current.val !== null) sum += current.val;

        if(current.right !== null) stack.push(current.right);
        if(current.left !== null) stack.push(current.left);
    }

    return sum;
};

const depthFirstRecursiveSum = (root) => {
    if(root === null) return 0
    const lv = depthFirstRecursiveSum(root.left);
    const rv = depthFirstRecursiveSum(root.right); 
    return root.val + leftValue + rightValue;    
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

console.log("Sum BFT Queue:", breadthFirstSum(a));
console.log("Sum DFT Stack:", depthFirstSum(a));
console.log("Sum DFT Stack Recursive:", depthFirstRecursiveSum(a));

//      A(9)
//      / \
//   B(10) C(11)
//    /\    \
// D(1) E(7) F(2)
// sum = 9+10+11+1+7+2 = 41
