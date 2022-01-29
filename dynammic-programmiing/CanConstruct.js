/*
    Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return a boolean indicating whether or not the `target`can be constructed by concatenating
    elements of the `wordbank` array.

    You may reuse elements of `wordbank` as many times as needed.

    canConstruct(abcdef, [ab, abc, cd, def, abcd]) => abc + def -> true

    canConstruct(skateboard, [bo,rd,ate,t,ska,sk,boar]) => false

    canConstruct('', [cat, dog, mouse]) => true



                                                abcdef
                                *        *        X         X        *
                                ab      abc       cd       def      abcd
                                /        /        /        /         /       
         *x ef----------cd  cdef       def     *N/A     *N/A      ef           
                                        /
                                      ''      
                    /        /        /        /         /       
                false     false    false    true      false                                
                                        

*/

const canConstruct = (target, wordBank, memo = {}) =>{
    
    if(target in memo) return memo[target];
    if(target === '') return true;

    for(word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
};

/*
    n = wordbank.length
    m = target.length

    * Brute Force Solution
    Time = O(n^m) * O(m)slicing = O(n^m *m) -> exponential
    Space = O(m)height * O(m) slicing =  O(m^2) -> quadric 

    * Memoization Solution
    Time = O(n) nodes * O(m) branches * O(m)slicing
    Time = O(n*m^2) -> quadric

    Space = O(m) memo keys * O(m) slicing = O(m^2) -> quadric

*/

console.log("result: ", canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log("result: ", canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log("result: ", canConstruct("aiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaib", ["i", "a", "ia", "ai"])); //false