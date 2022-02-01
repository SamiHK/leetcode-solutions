const mergeSort = (arr, left, right) => {

    if(left < right) 
    {
        let mid = Math.floor((left+right)/2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        mergeArray(arr, left, mid, right);
    }
    return;
};

// 0,1,2,3,4,5
// l   m     r

const mergeArray = (arr, left, mid, right) => {

    var n1 = mid - left + 1;
    var n2 = right - mid;
    

    var L = new Array(n1); 
    var R = new Array(n2);
    // Create temp arrays
    for (var i = 0; i < n1; i++)
        L[i] = arr[left + i];

    for (var j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = left;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

};


let arrA = ['a','c','b','z','q','p'];
mergeSort(arrA, 0, (arrA.length-1));
console.log("list : ", arrA);

let arrB = [1,6,11,5,22];
mergeSort(arrB, 0, (arrB.length-1));
console.log("list: ", arrB);

let arrC = [9,2,3,4,5,6,7,0];
mergeSort(arrC, 0, (arrC.length-1));
console.log("list: ", arrC);