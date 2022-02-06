/**
 * @param {string[]} triplets
 * @param {number} k
 * @return {string}
 */
 var kClosest = function(points, k) {
    
    if(points === null || points.length === 0) return [0,0];
        
    // two ways
    // one way is I store the frequencies of elements in a hashmap
    // create a bucket of lists with elements of same frequence
    // and then iterate over the bucket in reverse and find the Kth smallest.
    // S: O(n)
    // T: O(n) + O(n) + O( n * k )
    // T: O ( n * k)
    
    // [(1,2),(1,5),(2,3)] .... take a^2+b^2 and add on 0th index....[(5,1,2),(26,1,5),(13,2,3)]....... 
    // now heapify it using min heap. ... O(n)..... now iterate K times to find the K-closest point.... 
    // kLogn (iterate and heapify) <  nLogn (sorting)........ if we were to find the K-farthest element the 
    // we would heapify as Max-heap


    // Method #2 -- slightly better is if we first heapify this array : O(n) and create a Min-Heap
    // once we have a min-heap, we can pop/delete K times from the root and Kth smallest element will be on the root
    // Popping/Inserting into heap takes O(log n) and if we perform this K times
    // T: K (log n) --->        log(n) of 1000000 is 19.
    // S: O(1);
    
    // solution:
    // create min-heap
    let length = points.length;

    let triplets = points.map(([a,b]) => ([(a*a)+(b*b), a, b]));

    // o(n)
    for(let i = length-1; i >=0; i--){
        triplets = heapify(triplets, length, i);
    }
    
    // k Log(n);
    for(let i = 0; i < k-1; i++){
        length =  heapDelete(triplets, length); // arranged in max order
    }

    let res =  triplets.reverse().slice(0, k).map( ( [c,a,b] ) => ([a,b]) );
    return res;
};


const heapify = (triplets, n, i) => {

    let smallest = i;
    let left = (i===0) ? 1: 2 * i;
    let right = (i===0) ? 2: 2 * i + 1;

    if(triplets[left] === null && triplets[left] === null){
        return triplets;
    }
    // If left child is larger than root
    if((triplets[left]) && triplets[left][0] < triplets[smallest][0] && left < n){
        smallest = left;
    }

    // If right child is larger than root
    if(triplets[right] && triplets[right][0] < triplets[smallest][0] && right < n){
        smallest = right;
    } 

    // if smallest is not a root
    if(smallest !== i){
        // swap root and smallest values
        [triplets[i], triplets[smallest]] = [triplets[smallest], triplets[i]];
    }

    // optional
    return triplets;
};

// we always delete the top/root node of a heap
const heapDelete = (triplets, n) => {

    // optional to keep the last root node in array - if you keep doing deletion until heap is deleted and keep storing elements
    // at the very next node after heap boundary, elements becomes sorted
    let tmp = triplets[0];  // (optional)

    // Get the last element
    let lastElement = triplets[n - 1];    triplets[n-1] = tmp; // -< optional to replace
   
    // Replace root with first element
    triplets[0] = lastElement;

    // Decrease size of heap by 1
    n = n - 1;

    // heapify the root node
    heapify(triplets, n, 0);
    
    // return new size of Heap
    return n;
};

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
console.log(kClosest([[1,3],[-2,2]], 1));
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));