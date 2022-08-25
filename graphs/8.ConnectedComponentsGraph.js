const connectedComponentsCountRecursive = (graph) => {

    if(graph == null || graph.length == 0) return -1;
    const visited = new Set();

    let segments = 0;
    // checking every node of graph
    for(let node in graph){
        // exploring connections of every node
        if(exploreRecursive(graph, node, visited) === true){
            // if there is a connection, its a segment
            segments +=1;
        }

    }

    return segments;
};


const exploreRecursive = (graph, node, visited) => {

    if(visited.has(String(node))) return false;
    else visited.add(String(node));

    for(let neighbor of graph[node]){
        exploreRecursive(graph, neighbor, visited);
    }

    return true; // this statement is true as there will always be one graph component 
};

// Adjacency List is better for DF - Recursive approach
const graph = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}; // -> 2

/** 
 * Q: find number of connected componenets of undirected graph
          1
          |
      5 - 0 - 8  => 1st component
      \-------/

         
      4 - 2 - 3  => 2nd component
       \-----/

* Answer = 2   
* By design every graph is connected so answer is 1 or more    
*/
console.log("Count: ", connectedComponentsCountRecursive([]));
console.log("Count: ", connectedComponentsCountRecursive(graph));