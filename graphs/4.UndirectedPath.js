// DFR
const hasPath = (graph, src, dst, visited) => {

    if(!graph[src]) return false;
    if(src === dst) return true;
    
    if(visited.has(src)) return src;
    else visited.add(src)

    for(let neighbor of graph[src]){
        // return true if match
        if(hasPath(graph, neighbor, dst, visited)){
            return true;
        }
    }

    return false;
};


const hasUndirectedPath = (edges, src, dst) => {

    let graph = buildGraph(edges);

    let result = hasPath(graph, src, dst, new Set());

    return (result) ? console.log("FOUND") : console.log("NOT FOUND");
};


const buildGraph = (edges) =>{
    let graph = {};

    for(let [a,b] of edges){
        // since edges are not in graph
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        // since edges have a connection between them
        if(graph[a]) graph[a].push(b);
        if(graph[b]) graph[b].push(a);
    }

    return graph;
}


// since edges have a connection between them
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];


hasUndirectedPath(edges,'i','m') // -> true
hasUndirectedPath(edges,'x','m') // -> false
hasUndirectedPath(edges,'i','o') // -> false


// n = number of nodes
// e = number of edges
// Time = O(e)
// Space = O(n)

// convert edge-list to adjacency-list as traversal algorithms works best on adjacency-list
// adjacency list is-- a hybrid between an adjacency matrix and an edge list. 
// An adjacency list is an array of linked lists that serves the purpose of representing a graph.  
// What makes it unique is that its shape also makes it easy to see which vertices are adjacent to any other vertices. 
// Each vertex in a graph can easily reference its neighbors through a linked list.
// Due to this, an adjacency list is the most common representation of a graph. 
// Another reason is that graph traversal problems often require us to be able to easily figure out which nodes are the neighbors of another node.
// In most graph traversal interview problems, we don't really need to build the entire graph. 
// Rather, it's important to know where we can travel (or in other words, who are the neighbors of a particular node.).
