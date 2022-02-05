/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    const stack = [];
    
    let closeToOpen = { "}" : "{" , "]" : "[" , ")" : "(" };
    
    let [l, r] = [0, s.length];
    
    while( l < r ){
        
        if (s[l] in closeToOpen){
            
            if(stack !==null && stack[stack.length-1] === closeToOpen[s[l]]){
                stack.pop();
            } else {
                return false;
            }
            
        } else {
            stack.push(s[l]);
        }
        
        l++;
    }
    
    
    return (stack!==null) ? true : false; 
};

// "{[]}" --> working
// "()"
// "()[]{}"
// "(]"
// "([)]"