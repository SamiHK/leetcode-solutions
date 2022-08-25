REF: [Data Structures](https://www.interviewbit.com/data-structure-interview-questions/)

### Graphs
Graph is a type of non-linear data structure that consists of vertices or nodes connected by edges or links for storing data. Edges connecting the nodes may be directed or undirected.

Graph = Nodes + Edges

Node = Typical some circles with data inside it. A Graph can be a node but a node cannot be a graph.
Edge = shows connection between two Nodes, we can create many edges between many nodes.

Graphs can be directed, for this directions are defined between edges.
Graphs can be un-directed, for this directions are not defined and we can traverse between edges as we want if the link is present.

e.g.

    a   ->  c
    |       |
    -       -
    b   <-  e
    |
    -
    d   <-  f


### Adjacency List
```
{
    a:[b,c],
    b:[d],
    c:[e],
    d:[],
    e:[b],
    f:[d]
}
```

### Depth first traversal
We go deep into depth of a direction and only then we can change direction and start looking other edges.

We pick a point/node and travel as far as possible on that direction and then we change directions.

above list can be traversed by DFT if we start as (a): a->b->d->c->e->b->f

It uses a *stack* for better performance.

It uses a *LinkedList* for better performance in recursive implementation, although *arrays* can be useful.



----------------------------------------
### Breadth first traversal.
We check all neighbours on a certain depth, choice of choosing the first neighbour on a depth level is optional we can choose any.

in BDT, from the starting point we'll explore all the immidiate neighbours, once explored all neighbour edges, we shift the node and start exploring connecting edges from it.
sequence if we start BDT from (a): a->b->c->d->e->b->f

It uses a *queue* for better performance.

It uses a *LinkedList* for better performance, although *arrays* can be useful.

IMPORTANT: In Breadthfirst if you recursion to traverse it fight with stack calling mechanism of call stack so maybe we should only use iterative approach.