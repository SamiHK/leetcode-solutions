A tree contains many nodes (n)
--------------------------------------
one node can point to many other nodes, representation of tree is circle as nodes and connections as edges

Tree contains parent nodes and child nodes.
<!-- e.g. Valid Binary Tree -->
          Root (parent of all nodes, and has no parent and there are no arrows that goes into A)
            A
           / \
Parent&c  B   C parent&child
         /\    \
Child   D  E    F child&leaf
& leaf     Child&leaf


### Unary Tree
It is a tree where every node have at most one children(Linked List)

### Binary tree
It is a tree where every node have at most two children
RULES:
1. At most (2) children per node
2. exactly (1) root
3. exactly (1) path between root and any node 
4. Bi-tree (0) contains no cycle

EDGE CASES:
1. A singly linked-list can still be called as valid Binary tree
2. Only root can also be a valid binary tree
3. Empty tree is a valid binary tree

### Ternary tree
It is a tree where every node have at most three children

<!-- NOTE: Binary tree is a form of a directed graph -->


### Traversals:
A Binary Tree can have the following traversals:
1. Breadth First Traversal, i.e. going from traversing top level, then next level, then next, until all levels are covered.
2. Depth First Traversal, i.e. going from top to the depth/bottom of levels until levels are exhausted and move to next nodes in similar fashion. DFT can be of the following types.
    - a: In-Order-Traversal i.e. Traverse(left child, root, right child)
    - b: Pre-Order-Traversal i.e. Traverse(root, left child, right child)
    - c: Post-Order-Traversal i.e. Traverse(left child, right child, root)

### Complexities

BFT complexity:

if n = # of nodes
Time  = O(n)
Space = O(n)

DFT complexity:
if n = # of nodes
Time  = O(n) ~ assuming we use queue since addition and removal from queue are constants i.e. O(1).
Space = O(n)