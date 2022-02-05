/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//using HashMaps and Bucket Sort
function topKFrequent(nums, k) {
  
    //create map of f-element
    // [1,1,1,2,2,3,100,100,122,12,1]
    let count = new Map();
    for (let item of nums) {
        count[item] ? count[item]++ : (count[item] = 1);
    }
    // {
    //     1:4,
    //     2:2,
    //     3:1,
    //     12:1,
    //     100:2,
    //     121:1
    // }
    // -> we can iterate twice to get largest two values -> wrong assumtion as we ca see there are many keys with similar values
    // for we might have to check all n times. which is n^2;
    // optimizing;
    

    // bucket - sorting
    // create Dynamic array of undefined length and store the counter-values as keys
    // keys counts-values with highest value will get position at last index
    // note- their will be blanks in between the elements for positions that are not filled.
    let bucket = new Array();
    for (let key in count) {
        bucket[count[key]] 
        ? bucket[count[key]].push(key) 
        : (bucket[count[key]] = [key]);
    }


    let res = [];
    // iterate in reverse to get the higher frequence value first
    for (let i = bucket.length - 1; i > 0; i--) {
        // there can be blanks in-between
        if (bucket[i]) {
            // check
            for (let num of bucket[i]) {

                res.push(num)
                // if K-elements are pushed we can return
                if (res.length == k) {
                    return res;
                }

            }
        }
    }
}


console.log("Result: ", topKFrequent([1,1,1,2,2,3,100,100,122,12,1], k = 2));