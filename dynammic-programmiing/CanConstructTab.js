/*
    Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return a the number of ways  the `target`can be constructed by concatenating
    elements of the `wordbank` array.

    You may reuse elements of `wordbank` as many times as needed.

    countConstruct(abcdef, [ab, abc, cd, def, abcd]) => abc + def -> 1

    countConstruct(abcdef, [ab, abc, cd, def, abcd, ef]) => abc + def -> 3

    countConstruct(skateboard, [bo,rd,ate,t,ska,sk,boar]) => 0

    countConstruct('', [cat, dog, mouse]) =>  true *BASE CASE*



    example => canConstruct(abcdef, [ab,abc,cd,def,abcd]) -> true

      0    1    2    3    4    5     6
    -----------------------------------
    | 1  | 0  | 0  | 0  | 0  | 0  | 0 |
    -----------------------------------
      a     b    c    d    e    f   *


      

   CASE: Index 0, abcdef-> [ab, abc, abcd] valid

      0    1    2    3    4    5     6
    -----------------------------------
    | 1  | 0  | T  | T  | T  | 0  | 0 |
    -----------------------------------
      a     b    c    d    e    f   *



    CASE: Index 1,  not possible

      0    1    2    3    4    5     6
    -----------------------------------
    | 1  | 0  | T  | T  | T  | 0  | 0 |
    -----------------------------------
      a     b    c    d    e    f   *


    CASE: Index 2,  cdef->[cd]

      0    1    2    3    4    5     6
    -----------------------------------
    | 1  | 0  | T  | T  | T  | 0  | 0 |
    -----------------------------------
      a     b    c    d    e    f   *


    CASE: Index 3,  def->[def]

      0    1    2    3    4    5     6
    -----------------------------------
    | 1  | 0  | T  | T  | T  | 0  | T |
    -----------------------------------
      a     b    c    d    e    f   *


    keep doing untill end, and if last index is true. result can be constructed.

if you are at any index (a) then you are looking a substring before it and not including it, i.e. why last index is left empty



    * Complexity
    * m = target
    * n = wordbank.lenght
    * 
    * Time = O(m*n) * O(m) = O(n*m^2) -> polynomial
    * 
    * Space = O(m)

*/


const canConstruct = (target, wordBank) =>{

    const table = Array(target.length + 1).fill(false);
    table[0] = true; // empty string can be generated

    for (let i = 0; i <= target.length; i++) {
        if(table[i] === true){
            for (const word of wordBank) {
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] = true;
                }
            }
        }        
    }

    return table[target.length];
};


console.log("result: ", canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log("result: ", canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log("result: ", canConstruct("aiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaib", ["i", "a", "ia", "ai"])); //false