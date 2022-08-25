// a ->c
// |   |
// -   -
// b   e
// |
// -
// d ->f

//         a
//      c    b
//   e         d
//              f

const breadthFirstQueuePrint = (graph, root) => {

    const queue = [root];
    while(queue.length > 0){
        let edge = queue.shift();
        console.log(edge);

        for(let neighbour of graph[edge]){
            queue.push(neighbour);
        }

    }
    // Queue is FIFO
    // FI -> .push() -> entry at end
    // FO -> .shift() -> removal from start
    // horizontal
    // const queue = [source];
    // // if queue is not empty
    // while(queue.length > 0){
        
    //     // .shift() removes the first element of array and returns it. 
    //     // here in adjancency list elements are lists/arrays
    //     let current = queue.shift();
    //     console.log(current);

    //     for (let neighbour of graph[current]){
    //         // push into the queue the neighbours
    //         queue.push(neighbour);
    //     }
    // }
};
const graph = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

console.log("Queue program begins\n");

breadthFirstQueuePrint(graph, 'a');

// O(V + E)