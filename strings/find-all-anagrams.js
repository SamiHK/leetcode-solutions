/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  
    if(s.length < p.length) return [];
    
    let res = [];
    
    for (let i = 0; i < (s.length - p.length + 1); i++){
        let subStr = s.substring(i, i+p.length);
        if(isAnagram(subStr, p)){
            res.push(i);
        }
    }
    
    return res;
};  


var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    let[l,r] = [0,0];
    let map = new Map();
    
    let res = true;
    // creating hash-map of letters in string
    while(r < s.length){
        if(map.has(s[r])) {
            map.set(s[r], map.get(s[r]) + 1); 
        } else {
            map.set(s[r], 1);
        }
        
        r++;
    }
    
    //checking anagrams
    while(l < t.length){
        
        if(!map.has(t[l]) || map.get(t[l]) === 0){
            res = false;
            break;
        } else {
            map.set(t[l], map.get(t[l]) - 1); 
        }
         
        l++;
    }
    
    return res;
};



// console.log("result: ", findAnagrams("cbaebabacd", "abc"));
console.log("result: ", findAnagrams("abab", "ab"));
// console.log("result: ", isAnagram("ab", "a"));
// console.log("result: ", isAnagram("anagram", "anagram"));
// console.log("result: ", isAnagram("rat", "car"));