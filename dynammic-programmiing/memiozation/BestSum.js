// write a `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// the function should return an array containing best/shortest combinations of elements that add up to exactly the targetSum.
// if there is no combination that adds up to the targetSUm, the return null.

// If there are multiple combinations possible, you may return any one of shortest ones

// bestSum(7, [4,3,5,7]) -> [7]
// bestSum(8, [2,3,5]) -> [3,5] or [5,3]

// flip side
// bestSum(7, [2,4]) -> null, not possible
// bestSum(0, [1,2,3]) -> [], empty array


const bestSum = (targetSum, numbers, memo = {}) => {

    if(targetSum in memo) return memo[targetSum];

    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if(remainderCombination !== null) {
            const combinations = [...remainderCombination, num]; // -> O(m) steps in worst case.
            
            if(shortestCombination === null ){
                shortestCombination = combinations;
                continue;
            }

            if(combinations.length < shortestCombination.length){
                shortestCombination = combinations;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

/* 
 m = target sum
 n = numbers.length

 * Brute Force
 
 Time = O((n^m) * m) -> exponential
 Space = O(m*m) = O(m^2) -> quadric

 * Memoized Version
 Time = O(n*m -> memoization) * O(m -> array copying) = O(n*m^2) -> polynomial
 Space = O(m*m) => you have (m) keys each can have (m) array in worst case.  -> quadric
*/





console.log("Result: ", bestSum(7, [5,3,4,7])); // => [7]
/*
--------------------------------------------------
                      [3,4]  7 <- targetSum [7]
                   /     /   \      \
               -5 /  -3 /     \ -4   \-7
                 /     /       \      \
     *n         2      4       3       0  [] -> Ans
          [2]  
---------------------------------------------------
        /     /   \      \
    -5 /  -3 /     \ -4   \-7
      /     /       \      \
 *n   [] 
Ans->0     -1       -2      -5 

*/
console.log("Result: ", bestSum(7, [2,3])); // => [3,2,2]
console.log("Result: ", bestSum(7, [2,4])); // => null
console.log("Result: ", bestSum(11, [2,4,6,8])); //

console.log("Result: ", bestSum(100, [1,2,5,25])); //  Memoize this, it takes long
console.log("Result: ", bestSum(301, [7,14])); //  Memoize this, it takes long
console.log("Result: ", bestSum(300, [7,14])); //  Memoize this, it takes long