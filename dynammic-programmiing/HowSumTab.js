// write a `HowSumTubularized(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// the function should return an array containing any combinations of elements that add up to exactly the targetSum.

// if there is no combination that adds up to the targetSUm, the return null.

// If there are multiple combinations possible, you may return any single one

// HowSumTubularized(7, [4,3,5,7]) -> [7] OR [3,4]
// HowSumTubularized(8, [2,3,5]) -> [2,2,2,2] OR [3,5]

// flip side
// HowSumTubularized(7, [2,4]) -> null, not possible
// HowSumTubularized(0, [1,2,3]) -> [], empty array

/*
HowSumTubularized(7, [5,3,4]) => true

    CASE ## 1,  n = 0

      0      1      2       3        4       5         6        7
    -------------------------------------------------------------------
    | [] | null |  null  |  null  |  null  |  null  |  null  |  null  |
    -------------------------------------------------------------------
        length =  targetSum + 1    
    
    as we know it is possible to generate a zero, then we also know that it is also possible to 
    generate 5,3,4 using the coins of array.


       0      1      2       3        4       5       6       7
    -------------------------------------------------------------------
    | [] | null |  null  |  [3]  |   [4]  |   [5]  |  null  |  null  |
    -------------------------------------------------------------------
        length =  targetSum + 1 


    CASE ## 2, n=1

    since the origin/current element is false, it is not possible to generate (1) using numbers if array.
    logically makes sense as 3,4,5 is not going to give us back 1.
    -> if we have false at current position we should not modify values looking forward


    CASE ## 3, n=3
    if we start at index 3 notice that 5 positions ahead would be out of bound. we can ignore it.
    since current is true we can make 3, 5 positions ahead as true. i.e. indices 6 & 7 would be set to true. 

       0      1      2       3        4       5        6       7
    -------------------------------------------------------------------
    | [] | null |  null  |  [3]  |   [4]  |  [5]  |  [3,3]  |  [4,3]  |
    -------------------------------------------------------------------
        length =  targetSum + 1 

        we can keep doing this until the end of array, noticable here is that at the end of loop we can see at position 7 
        it is filled with true so it is possible to get 7 as sum.

    * Complexity of Solution
    * m = targetSum
    * n = numbers.length
    * 
    * Time = O(m) iterate table * innerloop Numbers O(n) * copyover arrays to forward posiiton O(m)
    * Time = O(n*m^2) -> polynomial
    
    * Space = O(m*m) -> quadratic
*/

const HowSumTubularized = (targetSum, numbers) =>{
    const table = Array(targetSum +1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if(table[i] !== null){
            for (const num of numbers) {
                table[i+num] = [...table[i], num];
            }
        }        
    }

    return table[targetSum];
};


console.log("Result: ", HowSumTubularized(7, [2,3])); // => [3,2,2]
console.log("Result: ", HowSumTubularized(7, [2,4])); // => null
console.log("Result: ", HowSumTubularized(11, [2,4,6,8])); // null
console.log("Result: ", HowSumTubularized(7, [5,4,3,7])); // [4,3]

// console.log("Result: ", HowSumTubularized(1000, [2,4])); //  Tubularized this, it takes long
console.log("Result: ", HowSumTubularized(301, [7,14])); //  Tubularized this, it takes long
console.log("Result: ", HowSumTubularized(300, [7,14])); //  Tubularized this, it takes long