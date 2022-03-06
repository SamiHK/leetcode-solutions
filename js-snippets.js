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

// sort by value
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

// sort by value-reverse
const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);
// Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// sort by key
const mapSort3 = new Map([...myMap.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

// sort by key-reverse
const mapSort4 = new Map([...myMap.entries()].reverse());
console.log(mapSort4);
// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}