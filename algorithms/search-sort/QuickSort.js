

const partition = (arr, low, high) => {

    // pivot
    let pivot = arr[high];
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
 
            // Increment index of
            // smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    let k = i+1;
    [arr[k], arr[high]] = [arr[high], arr[k]];
   
    return k;
};

const quickSort = (arr, low, high) => {

    if(low < high) {
        //getting new partition position
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
};


let arr1 = [1,6,11,5,22,3,8,23,9,2,7];
quickSort(arr1, 0, (arr1.length-1));
console.log("list : ", arr1);

let arr2 = [1,6,11,5,22];
quickSort(arr2, 0, (arr2.length-1));
console.log("list: ", arr2);

let arr3 = [9,2,3,4,5,6,7,0];
quickSort(arr3, 0, (arr3.length-1));
console.log("list: ", arr3);