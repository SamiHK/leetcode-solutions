// class Node{
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');


// //conside a as root
// // important no node can have two parents
// a.left  = b;
// a.right = c;

// b.left  = d;
// b.right = f;

// //           Root (parent of all nodes, and has no parent and there are no arrows that goes into A)
// //             A
// //            / \
// //(p & c)    B   C  (p & c)
// //          /\    \
// // Child   D  E    F child & leaf
// // & leaf     Child & leaf