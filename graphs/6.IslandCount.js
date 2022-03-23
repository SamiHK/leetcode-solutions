
const islandCount = (grid) => {

    let islands = 0;
    
    if(grid.length === 0 || grid[0].length === 0) return -1; // cannot calculate

    let visited = new Set();

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){

            if(exploreGrid(grid, r, c, visited)){
                islands += 1;            
            }
        }
    }

    return islands;
};

const exploreGrid = (grid, r, c, visited) => {

    const rowInBounds = (r >= 0 && r < grid.length);
    const colInBounds = (c >= 0 && c < grid[0].length);

    // if not in boundaries of grid no searching of island
    if(!rowInBounds || !colInBounds) return false;

    // if Water do not explore
    if(grid[r][c] === 'W') return false;

    //if already explored no searching
    if(visited.has(String(r + "," + c))) return false;

    // if not explored already
    visited.add(String(r + "," + c));

    // top
    exploreGrid(grid, r-1, c, visited);
    // bottom
    exploreGrid(grid, r+1, c, visited);
    // left
    exploreGrid(grid, r, c-1, visited);
    // right
    exploreGrid(grid, r, c+1, visited);

    return true;
};

const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
];


console.log("Islands:", islandCount(grid)); // -> 3
console.log("Islands:", islandCount([['W','W','W','W','W','W']])); // -> 0
console.log("Islands:", islandCount([[]])); // -> -1

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
