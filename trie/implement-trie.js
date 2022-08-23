// Prefix Tree
// Autocomplete
// Search
// Dictionary

class TrieNode{
    constructor(value){
        this.value = value;
        this.children = {};
        this.end = false;
    }
}

var Trie = function() {
    this.root = new TrieNode("*")
};


/** 
 * @param {string} word
 * @return {void}
 */
 Trie.prototype.insert = function(word) {
    
    let curr = this.root;
    // check each character of a word
    for (const c of word){
        // character can be inserted if not existing
        if(!(c in curr.children)){
            curr.children[c] = new TrieNode(c);
        }
        //moving current to next character
        curr = curr.children[c];
    }
    curr.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
 Trie.prototype.search = function(word) {
    
    let curr = this.root;
    // move to check next character untill word end
    for(const c of word){
        // if character is not found return false
        if(!(c in curr.children)){
            return false;
        }
        //  move to next character
        curr = curr.children[c];
    }
    return curr.end;
 };


 
/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
    let curr = this.root;
    for(const c of prefix){
        // if character is not found return false
        if(!(c in curr.children)){
            // we will not insert only check
            return false;
        }
        // only check if children exist and not the word
        curr = curr.children[c];
    }
    //children always exist, no need to find the end... ends are required for word completion
    return true;
};


//  * Your Trie object will be instantiated and called as such:
var obj = new Trie();
let word = "sami";
let prefix = "sam";
obj.insert(word);
console.log(obj);
var param_2 = obj.search(word);
console.log(param_2);
var param_3 = obj.startsWith(prefix);
console.log(param_3);
param_3 = obj.startsWith("i");
console.log(param_3);
param_3 = obj.startsWith("sa");
console.log(param_3);
