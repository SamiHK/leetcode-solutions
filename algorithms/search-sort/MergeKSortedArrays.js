/**
 * @param {number[]} arr1
 * @param {number} m
 * @param {number[]} arr2
 * @param {number} n
 * @return {void} Do not return anything, modify arr1 in-place instead.
 */
 const merge = (arr1, m, arr2, n) => {
    
    if(arr1.length === 0) return [];
    if(arr2.length === 0) return arr1;
    /*
    constraint only use arr1 
    Two pointer approach
    */
    let [i,j,k] = [m-1, n-1, n+m-1];
    while(k >= 0){
        //fill from the end, largest element at end
        if(arr1[i] > arr2[j]){
            arr1[k] = arr1[i];
            k--;
            i--;
        } else {
            arr1[k] = arr2[j];
            k--;
            j--;
        }

        if(j < 0) break;
    }

    // let i,j,k =0;
    // // let results = [];
    // while(i < m && j < n){
    //     if(arr1[i] < arr2[j]){
    //         arr1[k++] = arr1[i++];
    //     } else {
    //         arr1[k++] = arr2[j++]
    //     }
    // }

    // // if any of arrays have some elements left, append them
    // while(i < m) {
    //     arr1[k++] = arr1[i++];
    // }
    
    // while(j < n) {
    //     arr1[k++] = arr2[j++]
    // }
    
    return arr1;
};


var arr1 = [1,2,3,4,5,5,6,0,0,0];
var arr2 = [2,5,6]; 
var m = 7; 
var n = 3;

console.log(merge(arr1, m, arr2, n)); //[1,2,2,3,4,5,5,5,6,6]

arr1 = [1,2,3,0,0,0];
arr2 = [2,5,6]; 
m = 3; 
n = 3;

console.log(merge(arr1, m, arr2, n)); // [1,2,2,3,5,6]

console.log(merge([], 0, [], 0)); // []
console.log(merge([], 0, [1], 1)); //[] -> Since list1 is not present
console.log(merge([2,0], 1, [1], 1)); //[1,2]