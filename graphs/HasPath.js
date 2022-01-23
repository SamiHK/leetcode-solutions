/*
Write a function hasPath() that takes an object representing adjacency list of a directed acyclic graph
and two nodes(src, dst).
The function should return a boolean indicating whether or not there exist a directed path between the source and destination.
*/

const hasPath = (graph, src, dst) => {
    /**
    //Recursive -- DFS
    if(src === dst) return true;
    for(let neighbour of graph[src]){
        if(hasPath(graph, neighbour, dst))
        return true;
    }
    return false;
    **/

     /**
    //Iterative -- DFS
    if(src === dst) return true;
    
    const stack = [src];
    while(stack.length > 0) {
        const current = stack.pop();

        for(let neighbour of graph[current]){
            if(neighbour === dst) return true;
            else stack.push(neighbour);
        }

    }
    return false;
    **/

    /**
    // Recursive - BFS  */

    if(src === dst) return true;

    const queue = [src];
    while(queue.length > 0){
        const current = queue.shift();
        for(let neighbour of graph[current]){
            if(neighbour === dst) return true;
            else queue.push(neighbour);
        }
    }
    return false;
};


const graph = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
};


if(hasPath(graph, 'f', 'k')) console.log("FOUND\n");
else console.log("NOT FOUND\n");

if(hasPath(graph, 'i', 'h')) console.log("FOUND\n");
else console.log("NOT FOUND\n");

if(hasPath(graph, 'k', 'f')) console.log("FOUND\n");
else console.log("NOT FOUND\n");

if(hasPath(graph, 'j', 'f')) console.log("FOUND\n");
else console.log("NOT FOUND\n");