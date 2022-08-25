const minimalIslandCount = (grid) =>{
    
    let minimalIsland = Infinity;

    if(grid.length === 0 || grid[0].length === 0) return -1;

    let visited = new Set();

    for(let r  = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            let isLandSize = exploreGrid(grid, r, c, visited);
            if(isLandSize > 0 && isLandSize < minimalIsland){
                minimalIsland = isLandSize;
            }
        }
    }

    return minimalIsland === Infinity ? 0: minimalIsland;
};

const exploreGrid = (grid, r, c, visited) => {
    
    let rowInBounds = (r >= 0 && r < grid.length);
    let colInBounds = (c >= 0 && c < grid[0].length);
    
    // if not in boundaries of grid no searching of island
    if(!rowInBounds || !colInBounds) return 0;

    // if Water do not explore
    if(grid[r][c] === 'W') return 0;

    //if already explored no searching
    if(visited.has(String(r + ',' + c))) return 0;

    // if not explored already, cycle prevention logic
    visited.add(String(r + ',' + c)); 

    let size = 1;
    size += exploreGrid(grid, r-1, c, visited); // top
    size += exploreGrid(grid, r+1, c, visited); // bottom
    size += exploreGrid(grid, r, c-1, visited); // left
    size += exploreGrid(grid, r, c+1, visited); // right

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


console.log("Islands:", minimalIslandCount(grid)); // -> 2
console.log("Islands:", minimalIslandCount([['W','W','W','W','W','W']])); // -> 0
console.log("Islands:", minimalIslandCount([[]])); // -> -1

// r = 1
// c = 24
// pos = '1,24'

// r = 12
// c = 4
// pos = '12,4'
// gotcha = if you remove comma from key chances of collision are high i.e '1,24' and '12,4' will become same '124'


// common Gotcha for Set();
// const s = new Set();
// s.add([1,3]);
// console.log(s.has([1,3])); // will be false since Set() stores referene of value and in memory [1,3] can have different value

// s.add('1,3');
// console.log(s.has('1,3'));

// Island is vertically or horizontally connected region / segment

// complexity
// r = # rows 
// c = # cols 

// Time = O(rc)
// Space = O(rc)