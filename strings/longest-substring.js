/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    if(s === null) return null;
    if(s.length === 1) return 1;
    
    let map = new Map();
    let maxSize = 0;
    let lastChar = null;
    
    //sliding window
    let [left, right] = [0, 0];
    while(right < s.length){
        
        if(map.has(s[right])) {
            if(map.get(s[right]) === (right - map.size)){
                map.delete(s[right]);
                left = left +1;
            } else {
                left = map.get(s[right]);
                map.delete(s[right]);
            }
        }
        
        map.set(s[right], right);
        maxSize = Math.max(maxSize,  right - left + 1);

        lastChar = s[right];
        right = right + 1;
    }
    
    return maxSize;
};


console.log("result: ", lengthOfLongestSubstring(" "));
console.log("result: ", lengthOfLongestSubstring("au"));
// console.log("result: ", lengthOfLongestSubstring("ohvhjdml")); -> wrong results
console.log("result: ", lengthOfLongestSubstring("ckilbkd"));
console.log("result: ", lengthOfLongestSubstring("pwwkew"));
console.log("result: ", lengthOfLongestSubstring("dvdf"));
console.log("result: ", lengthOfLongestSubstring("abcabcbb"));
console.log("result: ", lengthOfLongestSubstring("bbbbb"));


// correct solution // copied
// function lengthOfLongestSubstring(s) {
//     if (typeof s !== "string" || s.length === 0) return 0;
//     if (s.length === 1) return 1;
    
//     let curMaxLength = 0; // To track the current maximum lenght we found
//     let curPointer = 0;  // This is pointer move to next character when we found duplicate
//     let movablePointer = 0;  // It will move from curPointer to find a duplicate
//     let counter = 0;  // To count each length when we iterate
//     let prevChars = {}; // To store prev chars to find duplicate
    
//     while (curPointer < s.length) {
//         if (s.length - curPointer <= curMaxLength) {
//             // If curPointer get to the index where less then curMaxLength then it will be end and we found maxLength alread
//             break;
//         }
//         if (movablePointer >= s.length) {
//             // If we found movablePointer greater then length of string then we found maxlength
//           curMaxLength = counter;
//           break;
//         }
        
//         if (prevChars[s[movablePointer]]) {
//             // When iterating if we found duplicate then set curMaxLength if applicable and reset
//             if (counter > curMaxLength) curMaxLength = counter;
//             counter = 0;
//             curPointer++;
//             movablePointer = curPointer;
//             prevChars = {};
//         } else {
//                // Otherwise increase counter and move movablePointer by one
//               prevChars[s[movablePointer]] = true;
//               movablePointer++;
//               counter++;
//         }
//      }
     
//      return curMaxLength;
//  }