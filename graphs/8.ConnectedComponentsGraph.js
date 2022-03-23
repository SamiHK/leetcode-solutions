const connectedComponentsCountRecursive = (graph) => {

    const visited =  new Set();
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

    return true;
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

console.log("Count: ", connectedComponentsCountRecursive(graph));

// Q: find number of connected componenets of undirected graph


//    5 
//    |\   = 1
//  1-0-8
//           +
//  4 - 3
//   \2/   = 1

// ANSWER  = 2