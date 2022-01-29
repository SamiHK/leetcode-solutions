/*
    Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return a 2D[][] array containing all of ways the `target`can be constructed by concatenating
    elements of the `wordbank` array.
    Single element of 2D array should represent one combination that constructs the `target`

    You may reuse elements of `wordbank` as many times as needed.

    allConstruct(purple, [purp, p, ur, le, purpl]) => [
        [purp, le],
        [p,ur,p,le]
    ]


    allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c])

                                *abcdef

                         -ab       -abc         -abcd
                         /          /           /       
                      cdef       def          ef ----> -ef '' [[]] 
                       / |          |
                    -cd   |         |    
                    /      |      -def ''[[]]
                  ef       -c  
                  |        |
                  |      def
                  |        |
                  -ef         -def 
              [[]]''       ''[[]] 

    ways = [[ab, cd, ef], [ab,c,def],[abc, def],[abcd, ef]]


    allConstruct(hello, [cat, dog, mouse]) => [] 
    allConstruct('', [cat, dog, mouse]) => [[]]                           

*/

const allConstruct = (target, wordBank, memo = {}) => {

    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for (const word of wordBank) { // *O(n)
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length); // *O(m)
            const suffixWays = allConstruct(suffix, wordBank, memo); // *O(m)
            const targetWays = suffixWays.map(way => [word, ...way]);// + 0(m)  ... [[z],[a,b,c]].map(z => [[z,x],[z,a,b,c])
            result.push(...targetWays);// if you just push(targetWays) it will become 3D array
        }
    }

    memo[target] = result;
    return result;
};

/*
    n = wordbank.length
    m = target.length

    * Brute Force Solution
    Time = O(n^m) * O(m)slicing * O(m)mapping = O(n^m *m*m) -> exponentially quadriac
    Space = O(m)height * [O(m) slicing + O(m)mapping]=  O(m^2) -> quadric 

    * Memoization Solution
    Time = O(n^m) + 0(m) + O(m) ... since we have to explore all ways and have to traverse all sub arrays there is nothing we can do 
    to be better that this.
    Time = O(n^m) -> exponential

    Space = O(m) -> when we have to return the complete results we do not conside it a space, only the additional space we use is
    referred here in this case it is O(m).

*/

console.log("result: ", allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("result: ", allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // 4
console.log("result: ", allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0

console.log("result: ", allConstruct("aaaaaaaaaaaaaaaaa", ["a", "aa", "aaa", "aaaa"])); //way too big
console.log("result: ", allConstruct("aiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaib", ["i", "a", "ia", "ai"])); //o