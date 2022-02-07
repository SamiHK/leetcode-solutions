
const depthFirstStackPrint = (graph, source) => {
    const stack = [source];

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);

        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
};


const depthFirstRecursivePrint = (graph, source) => {
    console.log(source);
    for(let neighbour of graph[source]){
        depthFirstRecursivePrint(graph, neighbour);
    }
};
// a ->c
// |   |
// -   -
// b   e
// |
// -
// d ->f
const graphDF = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

console.log("Stack program begins\n");

depthFirstStackPrint(graphDF, 'a');

console.log("Recursive program begins\n");

depthFirstRecursivePrint(graphDF, 'a');