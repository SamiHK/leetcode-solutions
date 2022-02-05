const breadthFirstStackPrint = (graph, source) => {
    const queue = [source];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for(let neighbour of graph[current]){
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

breadthFirstStackPrint(graphBF, 'a');

// console.log("Recursive program begins\n");
// breadthFirstRecursivePrint(graphBF, 'a');