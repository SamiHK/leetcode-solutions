// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// n = 3;
//     1,1,1
//     1,2
//     2,1
// r = 3 [ DP[2] + DP[1] ];

// n=4
// 1,1,1,1
// 2,1,1
// 1,2,1
// 1,1,2
// 2,2
// r = 5 [ DP[3] + DP[2] + DP[1]];

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    
    if( n===null || n===0 || n<0) return 0;
    
    if( n===1 ) return 1;
    
    if( n===2 ) return 2;

    // create a base case
    let results = new Array(n).fill(0);
    results[0] = 1;
    results[1] = 2;

    for (let index = 2; index <= n; index++) {
        results[index] = (results[index-1] + results[index-2]);
    }
    
    return results[n-1];
};


console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
console.log(climbStairs(8));
console.log(climbStairs(9));
console.log(climbStairs(10));
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89