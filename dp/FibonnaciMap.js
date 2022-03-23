const state =  new Map();
const fib = (n) =>{
    if(n <= 2) return 1;
    if(state.has(n)) return state.get(n);
    state.set(n, (fib(n-1) + fib(n-2)));
    return state.get(n);
};


console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
// lets  check the bottleneck
console.log("Bottleneck testing")
console.log(fib(25));
console.log(fib(40));
console.log(fib(45));
console.log(fib(50)); // -> this is going to not kill in Sami's Algo

// Time = O(n)
// Space = O(n);


