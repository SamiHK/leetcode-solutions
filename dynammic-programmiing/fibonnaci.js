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
console.log(fib(50));
