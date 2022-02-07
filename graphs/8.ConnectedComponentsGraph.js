// find number of connected componenets of undirected graph

const connectedComponentsCount = (graph) => {

    const visited = new Set(); 
    
    let countSegments = 0;

    for(let neighbor in graph){

        if(explore(graph, neighbor, visited) === true){
            countSegments +=1;
        }
    }

    return countSegments;
};


const explore = (graph, node, visited) =>{

    if(visited.has(String(node))) return false; // Important to set Key as String to avoid number key duplicates
    visited.add(String(node)); // Important to set Key as String to avoid number key duplicates

    console.log(visited);

    for (const neighbour of graph[node]) {
        // recursive
        explore(graph, neighbour, visited);
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

console.log("Count: ", connectedComponentsCount(graph));

//    5 
//    |\   = 1
//  1-0-8
//           +
//  4 - 3
//   \2/   = 1

// ANSWER  = 2