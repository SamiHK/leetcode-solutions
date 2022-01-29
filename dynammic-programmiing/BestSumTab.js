// write a `bestSumTab(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// the function should return an array containing best/shortest combinations of elements that add up to exactly the targetSum.
// if there is no combination that adds up to the targetSUm, the return null.

// If there are multiple combinations possible, you may return any one of shortest ones

// bestSumTab(7, [4,3,5,7]) -> [7]
// bestSumTab(8, [2,3,5]) -> [3,5] or [5,3]

// flip side
// bestSumTab(7, [2,4]) -> null, not possible
// bestSumTab(0, [1,2,3]) -> [], empty array



/*
    bestSumTab(7, [5,3,4,2]) => true

    CASE ## 1,  n = 0

      0      1      2       3        4       5         6        7
    -------------------------------------------------------------------
    | [] | null |  null  |  null  |  null  |  null  |  null  |  null  |
    -------------------------------------------------------------------
        length =  targetSum + 1    
    
    as we know it is possible to generate a zero, then we also know that it is also possible to 
    generate 5,3,4,2 using the coins of array.


       0      1      2       3        4       5       6       7
    -------------------------------------------------------------------
    | [] | null |   [2]  |  [3]  |   [4]  |   [5]  |  null  |  null  |
    -------------------------------------------------------------------
        length =  targetSum + 1 


    CASE ## 2, n=1

    since the origin/current element is false, it is not possible to generate (1) using numbers if array.
    logically makes sense as 3,4,5,2 is not going to give us back 1.
    -> if we have false at current position we should not modify values looking forward


    CASE ## 3, n=2
    since current is true we can make 2,3,4 5 positions ahead as true and adding current element there 

       0      1      2       3        4       5       6       7
    -------------------------------------------------------------------
    | [] | null |   [2]  |  [3]  |   [4]  |   [5]  |  [2,4]  |  [2,5]  |
    -------------------------------------------------------------------
        length =  targetSum + 1 

        [2,2] can generate [4] but it is not shortest way, ignoring cases like this  

    
        CASE ## 4, n=3
    since current is true we can make 2,3,4 5 positions ahead as true and adding current element there 

       0      1      2       3        4       5       6       7
    -------------------------------------------------------------------
    | [] | null |   [2]  |  [3]  |   [4]  |   [5]  |  [2,4]  |  [2,5]  |
    -------------------------------------------------------------------
        length =  targetSum + 1 

    will continue in this fashion

    * Complexity of Solution
    * m = targetSum
    * n = numbers.length
    * 
    * Time = O(m) iterate table * innerloop Numbers O(n) * copyover arrays to forward posiiton O(m)
    * Time = O(n*m^2) -> polynomial
    
    * Space = O(m*m) -> quadratic
*/




const bestSumTab = (targetSum, numbers) =>{
    const table = Array(targetSum +1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if(table[i] !== null){
            for (const num of numbers) {
                const combination = [...table[i], num];
                if( !table[i+num] || table[i+num].length > combination.length ){
                    table[i+num] = combination;
                }
            }
        }        
    }

    return table[targetSum];
};



console.log("Result: ", bestSumTab(7, [2,3])); // => [3,2,2]
console.log("Result: ", bestSumTab(7, [2,4])); // => null
console.log("Result: ", bestSumTab(11, [2,4,6,8])); //null
console.log("Result: ", bestSumTab(7, [5,4,3,7])); // null

console.log("Result: ", bestSumTab(100, [1,2,5,25])); //  Tabularize this, it takes long
console.log("Result: ", bestSumTab(301, [7,14])); //  Tabularize this, it takes long
console.log("Result: ", bestSumTab(300, [7,14])); //  Tabularize this, it takes long