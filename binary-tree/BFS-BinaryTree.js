class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstTraversal = (root) => {

    if(!root) return [];
    
    let traversals = [];

    const queue = [root];
    
    while(queue.length > 0) {

        let current = queue.shift();

        traversals.push(current.val);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);

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

console.log("Traversal BFS Queue:", breadthFirstTraversal(a));

//       A
//      / \
//     B   C
//    /\    \
//   D  E    F

//    ORDER = a,b,c,d,e,f (left first)
//    ORDER = a,c,b,f,e,d (right first)

//     null-------------------- null     
//                             d(visited) + (dequeed)
//      d  --------------------
//                             e(visited) + (dequeed)
//     d,e -------------------
//                             f(visited) + (dequeed)
//    d,e,f  -------------------
//                             b(visited) + (dequeed) + (childen-enqueued)
//     f,b -------------------
//                             c(visited) + (dequeed) + (childen-enqueued)
//     b,c -------------------
//                             a(visited) + (dequeed) + (childen-enqueued)
//      a --------------------                       
// ------------>            ------------
//    queue                   current