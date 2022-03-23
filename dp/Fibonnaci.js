const fib = (n) =>{
    if(n <= 2) return 1;
    return (fib(n-1) + fib(n-2));
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
console.log(fib(50)); // -> this is going to kill cpu

// Time = O(2^n) 
// Space = O(n); (since in each case function is pushed in stack)
