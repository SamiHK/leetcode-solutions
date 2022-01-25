
const undirectedPath = (edges, src, dst) => {

    const graph = buildGraph(edges);
    console.table(graph);

    result = hasPath(graph, src, dst, new Set());
    return (result) ? console.log("FOUND") : console.log("NOT FOUND"); // good thing about Set is that in O(1) time we get add / access something to/from it.
};



const hasPath = (graph, src, dst, visited) => {

    if(src === dst) return true;
    
    if(visited.has(src)) return false; // if edge is visited we must have travelled from it and no need to visit now
    visited.add(src);

    // source and neighbour are connected by direct edge..... 
    // so, if source is connected to neighbour and if neighbour connects with destination then here,
    // source will definately connects with the destination and we found a conenctrion path.
    for (let neighbour of graph[src]) {
        if(hasPath(graph, neighbour, dst, visited) === true){
            return true;
        }
    }
    // if we get RangeError: Maximum call stack size exceeded then we missed the cyclic cases

    return false;
};


const buildGraph = (edges) => {
    
    const graph = {};

    for (const edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}



const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];


undirectedPath(edges,'j','m') // -> true


// n = number of nodes
// e = number of edges
// Time = O(e)
// Space = O(n)

// convert edge-list to adjacency-list as traversal algotithms works best on adjacency-list
//adjacency list is-- a hybrid between an adjacency matrix and an edge list. An adjacency list is an array of linked lists that serves the purpose of representing a graph. What makes it unique is that its shape also makes it easy to see which vertices are adjacent to any other vertices. Each vertex in a graph can easily reference its neighbors through a linked list.
//Due to this, an adjacency list is the most common representation of a graph. Another reason is that graph traversal problems often require us to be able to easily figure out which nodes are the neighbors of another node. In most graph traversal interview problems, we don't really need to build the entire graph. Rather, it's important to know where we can travel (or in other words, who the neighbors of a node are).
