
<!-- CASE #1 -->
const foo = (n) =>{
    if(n <= 1) return;
    foo(n-1); 
};

Time = O(n);
Space = O(n);


<!-- CASE #2 -->
const foo = (n) =>{
    if(n <= 1) return;
    foo(n-2); 
};

Time = O(n/2) = O(n);
Space = O(n/2) = O(n);

<!-- CASE #3 -->
const foo = (n) =>{
    if(n <= 1) return;
    foo(n-1);
    foo(n-1); 
};

                 4                               
                / \
               3   3
              / \ / \ 
             2  22   2
            /\ /\/\  /\
           1 1 1111  1 1

 <!-- nodes = 1(top) * 2 * 2 * 2 = O(2^n) 
Time complexity = O(power(2,n)) or O(2^n)


                 4                               
                / \
               3   3
              / \ / \ 
             2  22   2
            /\ /\/\  /\
           1 1 1111  1 1

At one time only (h) elements in the call stack, h=height
                 4                               
                /
               3
              / 
             2
            /
           1 
lets say we reached the base case and now we have (h) elements in the stack 

                 4                               
                /
               3
              / 
             2
        /     \
pop->   1      1 <- pushing
 still (h) elements
length = levels = height = depth = n = 4 


Space = O(n)  -->


<!-- CASE #4 -->
const foo = (n) =>{
    if(n <= 1) return;
    foo(n-2);
    foo(n-2); 
};

                 6                               
                / \
               4   4
              / \ / \ 
             2  22   2
            /\ /\/\  /\
            11 1111  11

<!-- time = O(2^n), space = O(n) -->


<!-- CASE #5 Fibonnaci -->
It is the same case as case #3 and case #4;

const fib = (n) =>{
    if(n <= 2) return 1;
    return (fib(n-1) + fib(n-2));
};

                 5                               
                / \
               3   3
              / \ / \ 
             2  22   2
            /\ /\/\  /\
           1 1 1111  1 1
<!-- time = O(2^n), space = O(n) -->
<!-- Bottleneck here is time complexity i.e. n=50 is 2^50 = 1,125,899,906,842,624 calculations -->


<!-- CASE #6 Fibonnaci with Mapping -->
const state =  new Map(); 
const fib = (n) =>{
    if(n <= 2) return 1;
    if(state.has(n)) return state.get(n);
    state.set(n, (fib(n-1) + fib(n-2)));
    return state.get(n);
};

                 5                               
                / \
               3   3
              / \ / \ 
             2  22   2
            /\ /\/\  /\
           1 1 1111  1 1
<!-- space = callstack O(n-2) + map O(n-2) = O(n) -->
<!-- time = O(2n = n)-->