// find number of connected componenets of undirected graph

const largestComponent = (graph) => {

    const visited = new Set(); 
    // Make sure to add keys as string as Set can create a key of 0 as integer / String / both that can effect results.
    let longest = 0;
    

    for (const node in graph) {
        const size = exploreSize(graph, node, visited);

        if(size > longest) longest = size;
         
    }
    
    return longest;
};


const exploreSize = (graph, node, visited) =>{

    if(visited.has(String(node))) return 0; // Important to set Key as String to avoid number key duplicates

    visited.add(String(node)); // Important to set Key as String to avoid number key duplicates

    console.log(visited);

    let size = 1;

    for (const neighbour of graph[node]) {
        size += exploreSize(graph, neighbour, visited);
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