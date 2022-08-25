
const depthFirstStackPrint = (graph, source) => {
    
    const stack = [source];

    while (stack.length>0) {
        let curr = stack.pop();
        console.log(curr);

        for(let neighbour of graph[curr]){
            stack.push(neighbour);
        }
    }

    // Stack -> LIFO
    // LI -> .push() entry at end
    // FO -> .pop() exit at end
    // vertical
    // const stack = [source];

    // while(stack.length > 0){

    //     let current = stack.pop();
    //     console.log(current);

    //     for(let neighbors of graph[current]){
    //         stack.push(neighbors);
    //     }
    // }
};


const depthFirstRecursivePrint = (graph, source) => {
    
    console.log(source);
    for(let neighbour of graph[source]){
        // find using neighbours
        depthFirstRecursivePrint(graph, neighbour)
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
// O(V + E)
console.log("Stack program begins\n");

depthFirstStackPrint(graphDF, 'a');

console.log("Recursive program begins\n");

depthFirstRecursivePrint(graphDF, 'a');