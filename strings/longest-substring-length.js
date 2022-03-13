/**
 * @param {string} s
 * @return {number}
 */
 function lengthOfLongestSubstring(s) {
    
    if(s === null) return null;
    if(typeof(s) != "string" || s.length === 0) return 0
    if(s.length === 1) return 1;
    
    let [left, maxLength, charSet] = [0, 0, new Set()];
    
    for(let right = 0; right < s.length; right++){
        
        if (left >= s.length) {
            // If we found left greater then length of string then we found maxLength
            break;
        }

        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left += 1;
        }
        
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1);
        
    }
    
    return maxLength;
}


console.log("result: ", lengthOfLongestSubstring(" "));//1
console.log("result: ", lengthOfLongestSubstring("au"));//2
console.log("result: ", lengthOfLongestSubstring("abcabcbb"));//3
console.log("result: ", lengthOfLongestSubstring("bbbbb"));//1
console.log("result: ", lengthOfLongestSubstring("pwwkew"));//3
console.log("result: ", lengthOfLongestSubstring("ohvhjdml"));//6
console.log("result: ", lengthOfLongestSubstring("ckilbkd"));//5
console.log("result: ", lengthOfLongestSubstring("dvdf"));//3
