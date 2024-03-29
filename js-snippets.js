let object = [100,200,300,400,500,600,700,800,900,1000];

console.log("FOR-IN loop i.e. for Key in Object");
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log("key: " + key + ", element: " + element);
    }
}

console.log("FOR-OF loop i.e. iterator of Object");
for (const iterator of object) {
    console.log("iterator: " + iterator);
}

console.log("FOR-EACH i.e. every element of Object");
object.forEach(element => {
    console.log("element: " + element);
});

console.log("FOR Loop i.e. indexes of Object");
for (let index = 0; index < object.length; index++) {
    const element = object[index];
    console.log("index: " + index + ", element: " + element);
}

// array of tuples to plain array
let res = [ [1,2], [3,4], [5,6] ]; 
res = res.map(([a,b]) => a);
console.log(res);


const myMap = new Map();
myMap.set("a",3);
myMap.set("c",4);
myMap.set("b",1);
myMap.set("d",2);

// sort by value-descending
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

// sort by value-ascending
const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);
// Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// sort by key-ascending
const mapSort3 = new Map([...myMap.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

// sort by key-descending
const mapSort4 = new Map([...myMap.entries()].reverse());
console.log(mapSort4);
// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}


// Hack: // hack: if you append "" after and array the result will have array values concatenated together as string.
console.log("\n\n Array to String hack");
const arr = new Array(26).fill(0);
arr[0]=1;
arr[25]=1;
const hashT = arr + "";
console.log(arr,"\n\n",hashT, "\n\n");


let [level, row, column] = [[], 3,7];
level.push(...[[-1, 0], [0, -1], [0, 1], [1, 0]].map(([dr, dc]) => [row + dr, column + dc]));
console.log(level);

// sort all by first column, important to understand that sorting priority of given to first comparator
let quadruple = [[1,2,0,1],[1,3,0,1],[0,2,5,1]];
quadruple.sort(([d1, v1, r1, c1], [d2, v2, r2, c2]) => d1 - d2 || v1 - v2 || r1 - r2 || c1 - c2);
console.log(quadruple)

//change positions of array
console.log(quadruple.slice(0, 2).map(([distance, value, row, column]) => [row, column]));