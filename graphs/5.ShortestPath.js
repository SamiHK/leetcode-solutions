
const shortestPath = (edges, src, dst) => {

    if(src === dst) return 0;

    let graph = buildGraph(edges);

    let visited = new Set([String(src)]);

    let queue = [ [src, 0] ]; // initially distance is 1

    // Breadth First Search

    while(queue.length > 0){

        let [current, distance] = queue.shift();

        if(current === dst) return distance;

        for(let neighbor of graph[current]){

            if(!visited.has(String(neighbor))){
                
                visited.add(String(neighbor));

                queue.push([neighbor, distance +1]); // neighbour has distance +1
            }
        }
    }
    
    return -1;
};


const buildGraph = (edges) => {

    let graph = {};

    for(let edge of edges) {
        const [a, b] = edge;
        
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);

    }

    return graph;
};


const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];


console.log("Shortest Distance:", shortestPath(edges,'w','z')) // -> 2
console.log("Shortest Distance:", shortestPath(edges,'w','a')) // -> -1 (not found)


// n = number of nodes
// e = number of edges
// Time = O(e)
// Space = O(n)

// convert edge-list to adjacency-list as traversal algorithms works best on adjacency-list
//adjacency list is-- a hybrid between an adjacency matrix and an edge list. An adjacency list is an array of linked lists that serves the purpose of representing a graph. What makes it unique is that its shape also makes it easy to see which vertices are adjacent to any other vertices. Each vertex in a graph can easily reference its neighbors through a linked list.
//Due to this, an adjacency list is the most common representation of a graph. Another reason is that graph traversal problems often require us to be able to easily figure out which nodes are the neighbors of another node. In most graph traversal interview problems, we don't really need to build the entire graph. Rather, it's important to know where we can travel (or in other words, who the neighbors of a node are).



//   0-0-0-0-0-0-0
//   | | | | | | |
//   0-0-0-S-0-0-0
//   | | | | | | |
//   0-T-0-0-0-0-0
//   | | | | | | |
//   0-0-0-0-0-0-0
// In Breadth First we explore all edges equally. and S->T will be just two
// In Depth first we can go on a wrong path and continue to go untill we found a match, 
// in this case we will have a high change of exhausting all options before reaching target


// consider this problem
//      x----y
//    /        \
//   /          \
//  w            z
//   \-----v----/ 

// for BFS we use a queue
// we are going from (W)-->(Z)
// We are going to store queue and distance from starting point   
//  
//              (node, distance)
//
//    (w,0) ---------------------->(w,0) | explore options from (w)
//  (x,1),(v,1) ------------------>
//     (v,1) --------------------->(x,1) | explore options from (x)   
//  (y,2),(v,1)------------------->
//    (y,2)----------------------->(v,1) | explore options from (v)
//   (z,2),(y,2)------------------> we reached target (z) with distance (2), return (2) here since path through (y) will be larger.
//  ------------->                ---------
//    QUEUE                        CURRENT 