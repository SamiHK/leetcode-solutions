
const DFS = (graph, start) => {
    
    let visited = new Set();
    if(visited.has(start)) return;

    const stack = [start];
    while(stack.length > 0) {

        let current = stack.pop();
        visited.add(current);
        console.log(current);
        for(let neighbour of graph[current]){
            if(neighbour !== null && !visited.has(neighbour)){
                stack.push(neighbour);
            }
        }
    }
}


// const DFSR = (graph, start, visited={}) => {

//     if(visited[start]) return;
//     console.log(start);
//     for(let neighbor of graph[start]){

//         if(neighbor !== null && !visited[neighbor]){
//             visited[neighbor] = neighbor;
//             DFSR(graph, neighbor);
//         }
//     }

// }


const BFS = (graph, start) => {

    let visited = new Set();
    if(visited.has(start)) return;

    let queue = [start];
    while(queue.length > 0) {

        let current = queue.shift();
        visited.add(current);

        console.log(current);

        for(let neighbour of graph[current]){
            if(neighbour !== null && !visited.has(neighbour)){
                queue.push(neighbour);
            }
        }
    }
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
};

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];


console.log(DFS(buildGraph(edges), 'w'));

// console.log(DFSR(buildGraph(edges), 'w'));

console.log(BFS(buildGraph(edges), 'w'));