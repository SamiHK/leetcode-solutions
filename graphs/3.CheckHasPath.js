/*
Write a function hasPath() that takes an object representing adjacency list of a directed acyclic graph
and two nodes(src, dst).
The function should return a boolean indicating whether or not there exist a directed path between the source and destination.
*/

// O(n), O(1);
const hasPath = (graph, src, dst) => {

    if(src === dst) return true;
    const queue = [src];

    while(queue.length > 0){
        let current = queue.shift();
        for(let neighbour of graph[current]){
            if(neighbour === dst) return true;
            else queue.push(neighbour);
        }
    }

    return false;
};

// DFR
// O(n), O(n -> recursion);
const hasPathRecursive = (graph, src, dst) => {
    
    if(src === dst) return true;
    for(let neighbour of graph[src]){
        if(hasPathRecursive(graph, neighbour, dst) === true) return true;
    } 
    
    return false;
}




const graph = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
};

// O(V + E)

if(hasPath(graph, 'f', 'k')) console.log("FOUND\n");
else console.log("NOT FOUND\n");

if(hasPathRecursive(graph, 'i', 'h')) console.log("FOUND\n");
else console.log("NOT FOUND\n");

if(hasPath(graph, 'k', 'f')) console.log("FOUND\n");
else console.log("NOT FOUND\n");

if(hasPathRecursive(graph, 'j', 'f')) console.log("FOUND\n");
else console.log("NOT FOUND\n");