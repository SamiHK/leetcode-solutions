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
    allConstruct(hello, [cat, dog, mouse]) => [] 
    allConstruct('', [cat, dog, mouse]) => [[]]   
    
    



    * Complexity
    * m = target.length
    * n = wordbank.length
    * 
    * We cannot do better than brute force here
    * Time = O(n^m) -> exponential/limiting
    * 
    * Space = we have (n) as array but every element is also a 2d array(^m)
    * Space = ~O(n^m)

*/



const allConstruct = (target, wordBank) =>{

    const table = Array(target.length + 1)
    .fill()
    .map( () => []);

    table[0] = [[]]; // empty string can be generated

    for (let i = 0; i <= target.length; i++) {
        
        for (const word of wordBank) {
            if(target.slice(i, i + word.length) === word){
                let combinations = table[i].map( subArray => [...subArray, word]);
                table[i+word.length].push(...combinations);
            }
        }
        
    }

    return table[target.length];
};



console.log("result: ", allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("result: ", allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // 4
console.log("result: ", allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0

console.log("result: ", allConstruct("aaaaaaaaaaaaaaaaa", ["aaa", "aaaa"])); //way too big
console.log("result: ", allConstruct("iaiaiaiaiaiaiaiaiaib", ["i", "a", "ia", "ai"])); //o