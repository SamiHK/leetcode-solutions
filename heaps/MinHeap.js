

const minHeap = (numbers) =>{

    const n = numbers.length;
    if(n <= 1) return numbers;

    let minHeap = [];
    let rootPos = minHeap.length; // 0 
    let currLen = minHeap.length; // 0

    //Inserting into min-heap
    for(let i = 0; i < n; i++){
        
        if(minHeap.length === 0) {
            minHeap.push(numbers[i]);
        } else {
            currLen = minHeap.push(numbers[i]);

            do{
                rootPos = minHeap[Math.ceil(currLen/2) - 1];
                if(minHeap[rootPos] > minHeap[currLen - 1])
                {
                    
                }
            } while(Math.ceil[currLen/2] !== 0);
        }


    }

    //Deleting from min-heap
    for(let i = 0; i < n; i++){



    }
};




//     if a Node is at index (i)
//     a. Its left child will be at 2*(i)
//     b. Its right child will be at 2*(i) + 1
//     c. Its parent will be CEIL[i/2]



console.log(minHeap([]));
console.log(minHeap([1]));
// console.log(minHeap([1,2,3,4,5,6]));
// console.log(minHeap([1,34,23,234,234,2431,432,434,4,4]));


