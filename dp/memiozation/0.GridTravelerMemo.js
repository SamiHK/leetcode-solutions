// Rule: Say that you are a traveler on a [2D Grid]. You begin in the top-left corner and your goal is to travel 
// to the bottom-right corner. You may only move Down OR Right.

// Question: In how many ways can you travel to the goal on a grid with dimensions (m * n)?
// Solution: Write a function  `gridTraveler(m,n)` that calculates this.

// gridTraveler(2,3) -> 3

// [
//     [S][-][-],
//     [-][-][E],
// ]
// Paths: 1[right, right, down], 2[right, down, right], 3[down, right, right]

// gridTraveler(1,1) -> 1
// [
//   [S/E]
// ]
// Paths: 1[do nothing]

// gridTraveler(0,1) -> 0
// Paths: -1 (no grid)

// gridTraveler(1,0) -> 0
// Paths: -1 (no grid)

// gridTraveler(0,0) -> 0
// Paths: -1 (no grid)


// lets examine a gridTraveler(3,3)
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

// Tree Representation
// gridTraveler(1,2) -> 1
// [[S],[E]]
//         0+1 =1
//          (1,2)
//       D        R 
//    0(0,2)     (1,1)1
//          0(0,1)   (1,0)0




const gridTraveler = (m,n, memo = {}) =>{
    let key = m+','+n;
    if (key in memo) return memo[key];

    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    //calculating results
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo)

    return memo[key];
};


console.log("Grid Travel :", gridTraveler(1,2)); //1
console.log("Grid Travel :", gridTraveler(2,1)); //1
console.log("Grid Travel :", gridTraveler(2,2)); //2
console.log("Grid Travel :", gridTraveler(3,2)); //3
console.log("Grid Travel :", gridTraveler(2,3)); //3
console.log("Grid Travel :", gridTraveler(3,3)); //6
console.log("Grid Travel :", gridTraveler(18,18)); //2333606220

// Brute force 
// T: O(2^(n+m))
// S: O(n+m)


// Memoization Complexity         
// gridTraveler(4,3) = (m,n)  ..... m = [0,1,2,3,4], n = [0,1,2,3]

// nodes = m * n possible combinations
// T: O(n*m)
// S: O(m+n)