/*
    Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return a the number of ways  the `target`can be constructed by concatenating
    elements of the `wordbank` array.

    You may reuse elements of `wordbank` as many times as needed.

    countConstruct(abcdef, [ab, abc, cd, def, abcd]) => abc + def -> 1

    countConstruct(abcdef, [ab, abc, cd, def, abcd, ef]) => abc + def -> 3

    countConstruct(skateboard, [bo,rd,ate,t,ska,sk,boar]) => 0

    countConstruct('', [cat, dog, mouse]) => 1



                                                abcdef
                                *        *        X         X        *
                                ab      abc       cd       def      abcd
                                /        /        /        /         /       
         *x ef----------cd  cdef       def     *N/A     *N/A      ef           
                                        /
                    (0)      (0)      '' (1)   (0)       (0)
                    /        /        /        /         /       
                false     false    false    true      false                                
                                        

*/


const countConstruct = (target, wordBank, memo={}) =>{

    if(target in memo) return memo[target];
    if(target === '') return 1;

    let size = 0;

    for (const word of wordBank) { // O(n)
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length); // O(m)
            size += countConstruct(suffix, wordBank, memo); // O(m)
        }
    }

    memo[target] = size;
    return size;
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

    Space = O(m) memo keys * O(m) slicing = O(m^2) -> quadirc

*/

console.log("result: ", countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("result: ", countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"])); // 3
console.log("result: ", countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log("result: ", countConstruct("aiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaib", ["i", "a", "ia", "ai"])); //o