// Rule: Say that you are a traveler on a [2D Grid]. You begin in the top-left corner and your goal is to travel 
// to the bottom-right corner. You may only move Down OR Right.

// Question: In how many ways can you travel to the goal on a grid with dimensions (m * n)?
// Solution: Write a function  `gridTravelerTab(m,n)` that calculates this.

// gridTravelerTab(2,3) -> 3

// [
//     [S][-][-],
//     [-][-][E],
// ]
// Paths: 1[right, right, down], 2[right, down, right], 3[down, right, right]

// gridTravelerTab(1,1) -> 1
// [
//   [S/E]
// ]
// Paths: 1[do nothing]

// gridTravelerTab(0,1) -> 0
// Paths: -1 (no grid)

// gridTravelerTab(1,0) -> 0
// Paths: -1 (no grid)

// gridTravelerTab(0,0) -> 0
// Paths: -1 (no grid)


// lets examine a gridTravelerTab(3,3)
// [
//     [S][-][-],
//     [-][-][-],
//     [-][-][E],
// ]

// right relative grid
// [
//     [S][-],
//     [-][-],
//     [-][E],
// ]

// down relative grid
// [
//     [S][-][-],
//     [-][-][E],
// ]

// we are keep shrinking the size of the playable area

// Paths: 1[right, right, down, down], 2[right, down, right, down], 
//        3[right, down, down, right], 4[down, right, right, down],
//        5[down, right, down, right], 5[down, down, right, right]
// Paths = 6.

// *Table Representation
// * gridTravelerTab(3,3) -> the table should be (4x4) adding +1 in width and height



const gridTravelerTab = (m,n) =>{
    const table = new Array(m+1)
    .fill() // directly using Array()here will map one copy of array to all indexes and chaning one will change all
    .map (
        () => Array(n+1).fill(0) //fill new arrays with 0
    );
    
    table[1][1] = 1; //apply base case
    
    for(let i = 0; i<=m; i++){
        for(let j = 0; j<=n; j++){
            let current = table[i][j];
            if(j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }

    return table[m][n];
};

console.log("Grid Travel :", gridTravelerTab(3,3)); //6

/*
base case
gridTravelerTab(*0, *0) = 0
gridTravelerTab(1,1) = 1 -> this can be added to right and down neighbours

       0   1   2   3 
     -----------------
0    | 0 | 0 | 0 | 0 |                   
     -----------------
1    | 0 | 1 | 0 | 0 |
     -----------------
2    | 0 | 0 | 0 | 0 |
     -----------------
3    | 0 | 0 | 0 | 0 |
     -----------------


     It will become  like this by keep adding 1 to right and down neighbour
     row 1 iteration

      0   1   2   3 
     -----------------
0    | 0 | 0 | 0 | 0 |                   
     -----------------
1    | 0 | 1 | 1 | 1 |
     -----------------
2    | 0 | 1 | 1 | 1 |
     -----------------
3    | 0 | 0 | 0 | 0 |
     -----------------

     ---------------------------------------
     now in the row 2
     ---------------------------------------

      0   1   2   3 
     -----------------
0    | 0 | 0 | 0 | 0 |                   
     -----------------
1    | 0 | 1 | 1 | 1 |
     -----------------
2    | 0 | 1 | 2 | 3 |
     -----------------
3    | 0 | 1 | 2 | 3 |
     -----------------


     ---------------------------------------
     now in the row 3
     ---------------------------------------

      0   1   2   3 
     -----------------
0    | 0 | 0 | 0 | 0 |                   
     -----------------
1    | 0 | 1 | 1 | 1 |
     -----------------
2    | 0 | 1 | 2 | 3 |
     -----------------
3    | 0 | 1 | 3 | 6 |
     -----------------

     so here are 6 ways to travel this grid.



     * COMPLEXITY
     * Time = O(m*n)
     * Space = O(m*n)
*/

console.log("Grid Travel :", gridTravelerTab(1,2)); //1
console.log("Grid Travel :", gridTravelerTab(2,1)); //1
console.log("Grid Travel :", gridTravelerTab(2,2)); //2
console.log("Grid Travel :", gridTravelerTab(3,2)); //3
console.log("Grid Travel :", gridTravelerTab(2,3)); //3
console.log("Grid Travel :", gridTravelerTab(18,18)); //2333606220
