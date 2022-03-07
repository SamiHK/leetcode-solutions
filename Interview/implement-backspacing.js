// Implement Backspacing.
// i/p -> "abc#def##"
// o/p -> "abd"

/**
 * 
 * @param String characters 
 * @param String backspace 
 * @returns String result
 * @description Implement backspacing using # as backspace on a string of length (n)
 * @runtime big O(n),  `n` being number of characters of sample string
 * @space  big O(n - m), `m` being number of backspaces present in a string
 */
const backspacingString = (characters, backspace) => {

    if(characters.length === 0 || backspace === null || backspace.length > 1) return "";

    let [index, length] = [0, characters.length];
    const stack = [];

    while(index < length){

        if(stack.length === 0 && characters[index] === backspace){
            console.log("cannot backspace on empty string");
        } else {

            if(characters[index] !== backspace) stack.push(characters[index]);
            else stack.pop(characters[index]);

        }
        index++
    }

    return stack.join("");
};



console.log(backspacingString("abc#def##","#"));

