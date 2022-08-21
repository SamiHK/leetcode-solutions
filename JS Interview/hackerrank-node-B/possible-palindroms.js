
// if(startIndex.length !== endIndex.length || startIndex.length !== subs.length) return;
// if(s.length === 0) return;
// if(s.length === 1) return 1;
// if(s.length < startIndex.length) return;

const palindromeChecker = (s, startIndex, endIndex, subs) => {
    // Write your code here
    let n = startIndex.length;
    let bitString = ""

    for(let i = 0; i < n ; i++){
        
        if(i === 3) {
            console.log("debug");
        }

        let subString = s.substring(startIndex[i], endIndex[i]+1);
        let sublen = subString.length;
        if(sublen === 1) 
        {
            bitString = bitString + "1";
            continue;
        }

        let substitution = subs[i];
        let isPal = true;
        if(substitution === 0){
            [isPal, bitString] = isPalindrome(subString.split(''), sublen, bitString, isPal);
        }

        let index = 0;
        while(index < substitution){
            
            let subStringArr = subString.split('');
            isPal = true;

            if(subStringArr.length === substitution && substitution === 1) {
                bitString = bitString + "1";
                continue;
            }

            subStringArr[index] = subStringArr[subStringArr.length-1];
            // loop through half of the string
            [isPal, bitString] = isPalindrome(subStringArr, subStringArr.length, bitString, isPal);
            if(isPal){
                break;
            }
            index++;
        }
    }

    return bitString;
}

const isPalindrome = (strArr, strLen, bitString, isPal) => {

    for (let k = 0; k < strLen / 2; k++) {
        // check if first and last string are same
        if (strArr[k] !== strArr[strLen - 1 - k]) {
            bitString = bitString + "0";
            isPal = false;
            break;
        }
    }

    if(isPal){
        bitString = bitString + "1";
    }

    return [isPal, bitString];
};

console.log(palindromeChecker("cdecd", [0,0,0,0], [0,1,2,3], [0,1,1,0])); // 1110

// query 1  :s[0,0] = 'c', subs[0] = 0. The substring 'c' is a palindrome after 0 substitutions, so result = '1'.
// query 2: s[0,1]., subs[1] = 1. Change 'c' to 'd' or 'd' to 'c' in 1 substitution to make a palindrome 'dd' or 'cc', so result = '11'
// query 3: s[0,2]  = 'cde', subs[2]=1. Change 'c' to 'e' or 'e' to 'c' in 1 substitution to make a palindrome 'cdc' or 'ede', so result = '111'
// query 4: s[0,3] = 'cdec', subs[3] = 0. The string cannot be rearranged into a palindrome with 0 substutions so result = '1110'

console.log(palindromeChecker("bcba", [1,2,1], [3,3,1], [2,0,0])); // -> 101