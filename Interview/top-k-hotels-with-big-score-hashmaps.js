/**
 * 
 * @param any edgesWeight 
 * @param int k 
 * @returns top-k [parentHotelIds,score]
 * @runtime Big O (n + n log n) => Big O(n log n)
 * @space   Big O (n - m) : if n being number of edges and m being the childHotelIds
 */
const findTopKParentHotels = (edgesWeight, k) => {

    /* if required hotels are more than provided list return nothing */
    if(edgesWeight.length <= k) return [];
    const weightMap = buildWeightMap(edgesWeight);
    
    /* map is converted into array of tuples [a,b] */
    /* the [1]st index is the value..... comparator will sort in decresing order of b[1]  i.e. values */ 
    /* you can replace sorting by heapify to reduce time complexity*/
    let res = [...weightMap.entries()].sort((a,b) => b[1] - a[1]);
    
    /* if after building map if required hotels are less then k return nothing */
    if(k > res.length) return [];
    return(res.slice(0, k));
};


const buildWeightMap = (edgesWeight) => {
    
    const weightMap = new Map();

    for (const edge of edgesWeight) {
        
        const [a, b, weight] = edge;
        /** if weightMap doesn't have a hotel, add it and if the newly added hotel have been a parent to another hotel, 
         * lets add child hotel score to this hotel, and delete child hotel entry */
        if(!weightMap.has(String(b))){
            if(!weightMap.has(String(a))) {
                weightMap.set(String(b), weight);
            } else {
                weightMap.set(String(b), weightMap.get(String(a)) + weight);
                weightMap.delete(String(a));
            }
        }
    }

    return weightMap;
}

/**
 *  @abstract problem statement:
    Given a list of hotelId, parentHotelId and a score retrieve the top k root parentHotelIds with highest scores:
    [{0, 1, 10}, {1, 2, 20}, {3, 4, 10}, {7, 8, 5}] K = 2
    Result: [[2, 30], [4,10]]
 */


/** creating samples and executing function */
let edgeMatrix = [[0, 1, 10], [1, 2, 20], [3, 4, 10], [7, 8, 5]];
let k = 2;
console.log(findTopKParentHotels(edgeMatrix, k));