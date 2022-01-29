// write a `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// the function should return an array containing any combinations of elements that add up to exactly the targetSum.
// if there is no combination that adds up to the targetSUm, the return null.

// If there are multiple combinations possible, you may return any single one

// howSum(7, [4,3,5,7]) -> [7] OR [3,4]
// howSum(8, [2,3,5]) -> [2,2,2,2] OR [3,5]

// flip side
// howSum(7, [2,4]) -> null, not possible
// howSum(0, [1,2,3]) -> [], empty array

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers,memo);
        if(remainderResult !== null) {
            let resultantArray = [...remainderResult, num]; // -> O(m) steps in worst case.
            memo[targetSum] = resultantArray
            return resultantArray;
        }
    }

    memo[targetSum] = null
    return null;
};

/* 
 * Brute Force
 m = target sum
 n = numbers.length

 Time = O((n^m) * m) -> exponential
 Space = O(m) = O(m) -> linear

 * Memoized Version
 Time = O(n*m -> memoization) * O(m -> array copying) = O(n*m^2) -> polynomial
 Space = O(m*m) => you have (m) keys each can have (m) array in worst case.  -> quadric
*/





console.log("Result: ", howSum(7, [5,3,4,7])); // => [4,3]
/*
--------------------------------------------------
                           7 <- targetSum
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
console.log("Result: ", howSum(7, [2,3])); // => [3,2,2]
console.log("Result: ", howSum(7, [2,4])); // => null
console.log("Result: ", howSum(11, [2,4,6,8])); //

// console.log("Result: ", howSum(1000, [2,4])); //  Memoize this, it takes long
console.log("Result: ", howSum(301, [7,14])); //  Memoize this, it takes long
console.log("Result: ", howSum(300, [7,14])); //  Memoize this, it takes long