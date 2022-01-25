const minimalIsland = (grid) =>{

    // let islandSize = Number.MAX_SAFE_INTEGER;
    // OR 
    let islandSize = Infinity;
    if(grid.length > 0 && grid[0].length > 0){
    
        const visited = new Set();
        
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                let size = explore(grid, r, c, visited);
                if(size < islandSize && size > 0)
                {
                    islandSize = size;
                }
            }
        }

        return islandSize === Infinity ? -1: islandSize;

    } else {
        return -1;
    }
    
};

// r = 1
// c = 24
// pos = '1,24'

// r = 12
// c = 4
// pos = '12,4'
// gotcha = if you remove comma from key chances of collision are high i.e '1,24' and '12,4' will become same '124'
const explore = (grid, r, c, visited) => {
    //check inbounds
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid.length;
    if(!rowInBounds || !colInBounds) return 0;

    if(grid[r][c] === 'W') return 0;


    const pos = r + ',' + c;
    if(visited.has(pos)) return 0;
    visited.add(pos); // cycle prevention logic

    let size = 1;
    size += explore(grid, r-1, c, visited); // going up
    size += explore(grid, r+1, c, visited); // going down
    size += explore(grid, r, c-1, visited); // going left
    size += explore(grid, r, c+1, visited); // going right

    return size;
};

const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
];

// common Gotcha for Set();
// const s = new Set();
// s.add([1,3]);
// console.log(s.has([1,3])); // will be false since Set() stores referene of value and in memory [1,3] can have different value

// s.add('1,3');
// console.log(s.has('1,3'));

// Island is vertically or horizontally connected region / segment
console.log("Islands:", minimalIsland(grid)); // -> 3
console.log("Islands:", minimalIsland([['W','W','W','W','W','W']])); // -> -1


// complexity
// r = # rows 
// c = # cols 

// Time = O(rc)
// Space = O(rc)
