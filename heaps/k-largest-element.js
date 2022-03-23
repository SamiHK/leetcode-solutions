/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
 var kthLargestNumber = function(nums, k) {
    
    if(nums === null || nums.length === 0) return "0";
        
    // two ways
    // one way is I store the frequencies of elements in a hashmap
    // create a bucket of lists with elements of same frequence
    // and then iterate over the bucket in reverse and find the Kth largest.
    // S: O(n)
    // T: O(n) + O(n) + O( n * k )
    // T: O ( n * k)
    
    
    // Method #2 -- slightly better is if we first heapify this array : O(n) and create a Max-Heap
    // once we have a max-heap, we can pop/delete K times from the root and Kth largest element will be on the root
    // Popping/Inserting into heap takes O(log n) and if we perform this K times
    // T: K (log n) --->        log(n) of 1000000 is 19.
    // S: O(1);
    
    // solution:
    // create max-heap
    let length = nums.length;
    // let nums = nums.map((x) => BigInt(x));
    // o(n)
    for(let i = length-1; i >=0; i--){
        nums = heapify(nums, length, i);
    }
    
    // k Log(n);
    for(let i = 0; i < k-1; i++){
        length =  heapDelete(nums, length);
    }
    
    return nums[0];
};


const heapify = (nums, n, i) => {

    let largest = i;
    let left = (i===0) ? 1: 2 * i;
    let right = (i===0) ? 2: 2 * i + 1;

    // If left child is larger than root
    if(parseInt(nums[left]) > parseInt(nums[largest]) && left < n){
        largest = left;
    }

    // If right child is larger than root
    if(parseInt(nums[right]) > parseInt(nums[largest]) && right < n){
        largest = right;
    } 

    // if largest is not a root
    if(largest !== i){
        // swap root and largest values
        [nums[i], nums[largest]] = [nums[largest], nums[i]];
    }

    // optional
    return nums;
};

// we always delete the top/root node of a heap
const heapDelete = (nums, n) => {

    // optional to keep the last root node in array - if you keep doing deletion until heap is deleted and keep storing elements
    // at the very next node after heap boundary, elements becomes sorted
    let tmp = nums[0];  // (optional)

    // Get the last element
    let lastElement = nums[n - 1];    
    nums[n-1] = tmp; // -< optional to replace
   
    // Replace root with first element
    nums[0] = lastElement;

    // Decrease size of heap by 1
    n = n - 1;

    // heapify the root node
    heapify(nums, n, 0);
    
    // return new size of Heap
    return n;
};



console.log(kthLargestNumber(["4","6944","7","190","84395","49","310","809"], 6))
// console.log(kthLargestNumber(["21","2","12","982"], 2))
// console.log(kthLargestNumber(["0","0","0","0","10"], 1))
// console.log(kthLargestNumber(["0","1","1"], 2))
// console.log(kthLargestNumber(["2","21","12","1"], 3))
// console.log(kthLargestNumber(["3","6","7","10"], 4))

/**
 
var kthLargestNumber = function(nums, k) {
    let a = nums.map((x) => BigInt(x));
    // ["21","2","12","982"]
    a.sort((v1, v2) => (v2-v1)); OR // a.sort((a, b) => (a >= b ? -1 : 1));
    // [ 982, 21, 12, 2 ]
    console.log(a);
    return `${a[k - 1]}`;
}

*/

