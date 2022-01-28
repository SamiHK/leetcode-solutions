const fibMemoization = (n, memo = {}) =>{

    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    
    memo[n] = ((fibMemoization(n-1, memo) + fibMemoization(n-2, memo)));
    return memo[n];
};


console.log(fibMemoization(1));
console.log(fibMemoization(2));
console.log(fibMemoization(3));
console.log(fibMemoization(4));
console.log(fibMemoization(5));
console.log(fibMemoization(6));
console.log(fibMemoization(7));
console.log(fibMemoization(8));
console.log(fibMemoization(9));

// lets  check the bottleneck
console.log("Bottleneck testing")
console.log(fibMemoization(25));
console.log(fibMemoization(40));
console.log(fibMemoization(45));
console.log(fibMemoization(50)); // -> this is going to not kill in Sami's Algo

// Time = O(n)
// Space = O(n);

// memo = {
//     3:2,
//     4:3,
//     5:5,
//     6:8,
//     7:13,
//     8:21,
//     9:34
// }


// calculating space and time till fibMemoization(9)

//                  9
//                 /\
//                8  7  
//               / \
//              7   6
//             / \
//            6   5 
//           / \
//          5   4 
//         / \
//        4   3
//       / \
//      3   2
//     / \
//    2   1
     
// # nodes = 2n
// Time = O(2n) = O(n)

// space = callstack O(n-2) + memo O(n-2) = O(n) 
// Space = O(n) 