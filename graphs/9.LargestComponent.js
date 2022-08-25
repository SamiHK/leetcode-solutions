// find number of connected componenets of undirected graph

const largestComponent = (graph) => {

    if(graph === null || graph.length === 0) return -1;

    const visited = new Set();
    let largest  = 0;

    for(let node in graph){
        let size = exploreGraph(graph, node, visited);
        if(size>largest) largest = size;
    }

    return largest;
};


const exploreGraph = (graph, node, visited) =>{

    if(visited.has(String(node))) return 0;// Important to set Key as String to avoid number key duplicates
    visited.add(String(node)); // Important to set Key as String to avoid number key duplicates

    let size = 1; // if we explore size starts with 1 for any node
    for(let neighbour of graph[node]){
        size += exploreGraph(graph, neighbour, visited);
    }

    return size;
};

const graph = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}; // -> 2

console.log("Largest Size: ", largestComponent(graph));

//    5 
//    |\   1st component with size 4
//  1-0-8
//           +
//  4 - 3
//   \2/   2nd component with size 3

// ANSWER  = 4