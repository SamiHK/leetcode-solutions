/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    
    // since intervals are sorted we need to only insert and overlap
    let [startP, endP] = [newInterval[0], newInterval[1]]; 
    let overlapped = false;
    let len = intervals.length;
    
    for(let i = 0; i < len; i++) {
        // base-case if it can be inserted at the very beginning
        if(!overlapped){
            if(startP < intervals[i][0] && endP < intervals[i][1]) {
                // to insert provide replacement as 0.
                intervals.splice(i, 0, [startP,endP]); 
                return intervals; 
            }
        }
        
        if(
            startP === intervals[i][0]  || startP === intervals[i][1] 
            || endP === intervals[i][0] || endP === intervals[i][1] 
            || (startP > intervals[i][0] && startP < intervals[i][1])
            || (endP > intervals[i][0] && endP < intervals[i][1])
        )
        {
            
            // overlapping current index
            intervals[i][0] = Math.min(intervals[i][0], startP);
            intervals[i][1] = Math.max(intervals[i][1], endP);
            
            // setting pointers for next
            startP = intervals[i][0];
            endP = intervals[i][1];
            
            // if after any overlapp we are under the bounds of next element we break free.
            if(i!== (intervals.length-1) && intervals[i][1] < intervals[i+1][0] ) {
                break;   
            }
            
            if(overlapped){
                intervals.splice(i, 1);
                i = i -1;
                len = len -1;
            }
           
           overlapped = true; 
        }
    }
    
    return intervals;
};


// console.log("results: ", insert([[3,4],[6,9]], [1,2]));
// console.log("results: ", insert([[1,3],[6,9]], [2,5]));
console.log("results: ", insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));