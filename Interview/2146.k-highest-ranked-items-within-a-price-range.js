// Find the top K closest hotels within a price range. 
// In the input grid 0 means a blocker which you can't pass through, 1 means road 
// which you can use to navigate, any value above 1 is the price of the hotel 
// located at x,y. You will be given this grid, price range and origin coordinates. 
// You should return K hotels within price range and closest to the given origin.

// Input:
// [[1,2,0,1],
// [1,3,0,1],
// [0,2,5,1]
// ]

/*
 * @lc app=leetcode id=2146 lang=javascript
 *
 * [2146] K Highest Ranked Items Within a Price Range
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */

const highestRankedKItems = function (grid, pricing, start, k) {
   
    const [min, max] = pricing;

    let queue = [start];

    let distance = 0;

    const res = [];

    while(queue.length > 0) {
        
        ++distance;

        const level = [];
        
        for (const [row, column] of queue){
            
            // short circuit checking
            if (grid[row] && grid[row][column] && grid[row][column] !== 0) {

                const value = grid[row][column];

                if (value >= min && value <= max)
                {
                    res.push([distance, value, row, column]);
                }

                grid[row][column] = 0;
                
                // OPTIMIZATION: add conditions here to check in advance if we have a zero
                level.push([row-1, column]);
                level.push([row, column-1]);
                level.push([row+1, column]);
                level.push([row, column+1]);
                // level.push(...[[-1, 0], [0, -1], [0, 1], [1, 0]].map(([dr, dc]) => [row + dr, column + dc]));
            }
        }

        queue = level;

        if (k <= res.length) break;
    }

    res.sort(([d1, v1, r1, c1], [d2, v2, r2, c2]) => d1 - d2 || v1 - v2 || r1 - r2 || c1 - c2);
   
    console.log(res);

    return res.slice(0, k).map(([distance, value, row, column]) => [row, column]);
};

// let grid = [[1,2,0,1],[1,3,0,1],[0,2,5,1]];
// let pricing = [2,5];
// let start = [0,0];
// let k = 3;
// console.log(highestRankedKItems(grid, pricing, start, k));

