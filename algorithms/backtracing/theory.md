Essentially a backtracing problem is about finding a valid state

## State

an example of state is arbitrarity placing (n) queens on a (n x n) board
e.g. here we are placing (4) queens on a (4 x 4) board.
<!-- Placing 1st Queen -->
[
    [ . , . ,   ,   ],
    [ n , . , . , . ],
    [ . , . ,   ,   ],
    [ . ,   , . ,   ]
]

<!-- now the options are limited for next queen since the first queen can move diagonally, horizontally and vertically -->
<!-- placing 2nd queen -->

[
    [ . , . ,   ,   ],
    [ n , . , . , . ],
    [ . , . , . ,   ],
    [ . , n , . , . ]
]

<!-- placing 3rd queen -->

[
    [ . , . , n , . ],
    [ n , . , . , . ],
    [ . , . , . ,   ],
    [ . , n , . , . ]
]

<!-- placing 4th queen -->

[
    [ . , . , n , . ],
    [ n , . , . , . ],
    [ . , . , . , . ],
    [ . , n , . , . ]
]



<!-- INVALID STATE -->
<!-- Since there is no room for 4th queen in here -->

[
    [ n , . , . , . ],
    [ . , . , . , - ],
    [ . , n , . , . ],
    [ . , . , . , . ]
]
-----------------------------------------------------
There are 4 parts in which we can break this problem
1. *is_valid_state(state)*
2. *get_candidate(state)*
3. *search(state, solutions)*
4. *solve()*