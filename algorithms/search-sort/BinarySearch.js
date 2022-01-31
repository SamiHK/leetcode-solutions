class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const binarySearch = (target, values) => {

    if(values.length === 0) return false;
    if(target === null) return false;

    let start = 0;
    let end = values.length - 1;

    while(start <= end) {
        
        let mid = Math.floor((start+end)/2) // floor values as if length is odd it will take floor of the average number

        if(target === values[mid]) return true;

        if(target > values[mid]) {
            start = mid + 1 // since cannot start at mid as we do not find value here
        } else {
            end = mid - 1 // for lesser value end will be shifted to one space before mid
        }

    }
    return false;
};


const binarySearchRecursive = (target, values) => {
    
    if(values.length === 0) return false;
    if(target === null) return false;

    console.log(values);
    let start = 0;
    let end = values.length - 1;
    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (values[mid]=== target) return true;

    // search in the left half of mid
    if(values[mid] > target)
        return binarySearchRecursive(target, values.slice(start, mid));
    else
 
        // search in the right half of mid
        return binarySearchRecursive(target, values.slice(mid+1, end+1));
};




console.log(binarySearch(7,[1,2,3,4,5,6,7]));
console.log(binarySearch(100,[1,2,3,4,5,6,7]));

console.log(binarySearchRecursive(1,[1,2,3,4,5,6,7]));
console.log(binarySearchRecursive(7,[1,2,3,4,5,6,7]));