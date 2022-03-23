### Tabulatiomn Recipie

high levels steps:

(a) -> Make it work, there is only only solution
    1. visualize the problem as table
    2. size the table based on inputs to the problem
    3. initialize the table with default values with relative type
    4. seed the trivial answer into the table -> base case
    5. iterate through the table
    6. fill further positions based on the current position


In Tabulation, instead of solving problems recursively we solve it **ITERATIVELY**
In Tabulation, the state transition if difficult to think, code is complicated with more checks.
In Tabulation, we start from first entry then second and built like this til the end.
In Tabulation, we use bottom-up strategy which outperforms top-down strategy by a constant factor.

<!-- 
fibTab(6) -> 8

solve:

fibTab(0) -> 1
fibTab(1) -> 1
fibTab(2) -> fibTab(2-1) + fibTab(2-2)
...
fibTab(6) -> fibTab(4)+ fibTab(5)

  0   1   2   3   4   5   6
-----------------------------
  0 | 1 | 1 | 2 | 3 | 5 | 8 |
----------------------------- 
-->

Time complexity  = O(n)
Space complexity = O(n)