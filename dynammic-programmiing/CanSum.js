// write a `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return a boolean indicating whether or not,
// it is possible to generate the targetSum using numbers form array?

// you may use element of array as many times as needed.
// you may assume that all input numbers are non-negative.

// e.g. canSum(7, [5,3,4,7]) => true. It is possible here that that targetSum of 7 can be made using the array values.
// e.g. canSum(11, [7,5,2,3]) => false, it is not possible that elements of array can be summed to target of 11.



const canSum = (targetSum, numbers) =>  {
    
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    
    for (let num of numbers) {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers) === true) {
            return true;
        }
    }
    
    return false;
};
// -------------------
    // BRUTE FORCE SOLUTION
    // m = target sum 
    // n = array length

    // imagine if keep doing -1 in the worst case we would take height of tree to be equal to target sum
    // height = target num = m (worst case)

    // each node can have at most (n) childs and provided the for each height(m)
    
    // Time Complexity  = O(n^m);
    // Space Complexity = O(m); -> height of tree
// -------------------




// we can have overlappting sub-problems while doing recursive calls and we can me use of them to reduce the Runtime.
const canSumMemoize = (targetSum, numbers, memo = {}) =>  {
    
    if(targetSum in memo) return memo[targetSum];

    if(targetSum === 0) return true;

    if(targetSum < 0) return false;
    
    
    for (let num of numbers) {
        const remainder = targetSum - num;
        if(canSumMemoize(remainder, numbers, memo) === true) {
            memo[targetSum] = true; // track return
            return true;
        }
    }

    memo[targetSum] = false; // track return 
    return false;
};

// -------------------
    // MEMOIZED SOLUTION
    // m = target sum 
    // n = array length

    // since we are memoing/cache branch results and do not calculate them again, the runtime will be (m) times the length of array (n)
    
    // Time Complexity  = O(n * m); 
    // Space Complexity = O(m); -> height of tree
// -------------------


console.log("Result: ", canSum(7, [5,3,4,7])); // => true
/*
--------------------------------------------------
                           7 <- targetSum
                   /     /   \      \
               -5 /  -3 /     \ -4   \-7
                 /     /       \      \
     *n         2      4       3       0 -> Ans 
---------------------------------------------------
        /     /   \      \
    -5 /  -3 /     \ -4   \-7
      /     /       \      \
 *n     
Ans->0     -1       -2      -5 

*/
console.log("Result: ", canSum(7, [2,3])); // => true
console.log("Result: ", canSum(7, [2,4])); // => false
console.log("Result: ", canSum(11, [2,4,6,8])); // => false

console.log("Result: ", canSumMemoize(1000, [2,4])); // => true + Memoize this, it takes long
console.log("Result: ", canSumMemoize(301, [7,14])); // => false + Memoize this, it takes long
console.log("Result: ", canSumMemoize(300, [7,14])); // => false + Memoize this, it takes long

