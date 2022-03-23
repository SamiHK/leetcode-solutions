/*
    Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return a the number of ways  the `target`can be constructed by concatenating
    elements of the `wordbank` array.

    You may reuse elements of `wordbank` as many times as needed.

    countConstruct(abcdef, [ab, abc, cd, def, abcd]) => abc + def -> 1

    countConstruct(abcdef, [ab, abc, cd, def, abcd, ef]) => abc + def -> 3

    countConstruct(skateboard, [bo,rd,ate,t,ska,sk,boar]) => 0

    countConstruct('', [cat, dog, mouse]) => 1




    * complexity
    * m = target
    * n = wordbank.length
    * 
    * Time = O (m*n) iterations * O(m) lookforward of characters
    * TIme = O(n*m^2) -> polynomial
    * 
    * Space = 0(m) -> linear
*/




const countConstruct = (target, wordBank) =>{

    const table = Array(target.length + 1).fill(0);
    table[0] = 1; // empty string can be generated

    for (let i = 0; i <= target.length; i++) {
        
        for (const word of wordBank) {
            if(target.slice(i, i + word.length) === word){
                table[i + word.length] += table[i];//increment by current position
            }
        }
        
    }

    return table[target.length];
};

console.log("result: ", countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log("result: ", countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("result: ", countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"])); // 3
console.log("result: ", countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log("result: ", countConstruct("aiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaib", ["i", "a", "ia", "ai"])); //o