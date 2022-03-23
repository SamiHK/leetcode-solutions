// write a `canSumTab(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return a boolean indicating whether or not,
// it is possible to generate the targetSum using numbers form array?

// you may use element of array as many times as needed.
// you may assume that all input numbers are non-negative.

// e.g. canSumTab(7, [5,3,4,7]) => true. It is possible here that that targetSum of 7 can be made using the array values.
// e.g. canSumTab(11, [7,5,2,3]) => false, it is not possible that elements of array can be summed to target of 11.

// e.g. canSumTab(0, [...]) => true


/*  canSumTab(7, [5,3,4]) => true

    CASE ## 1,  n = 0

      0   1   2   3   4   5   6   7
    ---------------------------------
    | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
    ---------------------------------
        length =  targetSum + 1    
    
    as we know it is possible to generate a zero, then we also know that it is also possible to 
    generate 5,3,4 using the coins of array.


      0   1   2   3   4   5   6   7
    ---------------------------------
    | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
    ---------------------------------
        length =  targetSum + 1 


    CASE ## 2, n=1

    since the origin/current element is false, it is not possible to generate (1) using numbers if array.
    logically makes sense as 3,4,5 is not going to give us back 1.
    -> if we have false at current position we should not modify values looking forward


    CASE ## 3, n=3
    if we start at index 3 notice that 5 positions ahead would be out of bound. we can ignore it.
    since current is true we can make 3, 5 positions ahead as true. i.e. indices 6 & 7 would be set to true. 

      0   1   2   3   4   5   6   7
    ---------------------------------
    | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |
    ---------------------------------
        length =  targetSum + 1 

        we can keep doing this until the end of array, noticable here is that at the end of loop we can see at position 7 
        it is filled with true so it is possible to get 7 as sum.



   * Complexity of Solution
   *  m = targetSum
   *  n = numbers.length
   * 
   * Time = O(m) array iterator * O(n) target checking
   * Time = O(m*n)
   * 
   * Space = O(m)

*/

const canSumTab = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if(table[i] === true){// only check ahead if true
            for (const num of numbers) {
                 table[i + num] = true; // here if something is inserted in out of bound position, will not affect logic 
                 // as the loop is running till targetSum.
                 // if you use table.length -> then addition of new element would create a circular dependency
                 // if you use table.length -> must check for out of bound indexec and only insert true if possible
            }       
        }
    }

    return table[targetSum];

};

console.log("Result: ", canSumTab(7, [2,3])); // => true
console.log("Result: ", canSumTab(7, [2,4])); // => false
console.log("Result: ", canSumTab(11, [2,4,6,8])); // => false

console.log("Result: ", canSumTab(1000, [2,4])); // => true + Tubularize this, it takes long
console.log("Result: ", canSumTab(301, [7,14])); // => false + Tubularize this, it takes long
console.log("Result: ", canSumTab(300, [7,14])); // => false + Tubularize this, it takes long