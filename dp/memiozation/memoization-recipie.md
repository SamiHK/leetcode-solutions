### Memoization Recipie

Two high levels steps:

(a) -> Make it work, recursive/brute-force etc.
    1. look for correctness of problem first
    2. visualize the problem as a tree
    3. implement tree using recursion, think of leaves of tree as base-case
    4. test it for small problem, get correct answers

(b) -> Make it efficient
    1. add a memo object
    2. add a base case to return memo values, i.e. new base case that captures memo by creating key by arguments and return values
    3. store return values into memo
    4. test it for small problem, get correct answers