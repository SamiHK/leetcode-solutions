const breadthFirstQueuePrint = (graph, source) => {

    // Queue is FIFO
    // FI -> .push() -> entry at end
    // FO -> .shift() -> removal from start
    // horizontal
    const queue = [source];
    // if queue is not empty
    while(queue.length > 0){
        
        // .shift() removes the first element of array and returns it. 
        // here in adjancency list elements are lists/arrays
        let current = queue.shift();
        console.log(current);

        for (let neighbour of graph[current]){
            // push into the queue the neighbours
            queue.push(neighbour);
        }
    }
};

// a ->c
// |   |
// -   -
// b   e
// |
// -
// d ->f
const graphBF = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

console.log("Queue program begins\n");

breadthFirstQueuePrint(graphBF, 'a');

// O(V + E)