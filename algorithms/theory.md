### Divide and Conquer

- If a problem set P of size N is given, we can break that problem into N number of subsets
   
- The sub-problems should also be solving the same problem as main problem, lets say we break them into K sub-problems


                    P          Size = N
               /  /   \  \
              p1 p2   p3  pk
              |   |    |   |
              s1 s2   s3  sk 
              \   \   /   /
                    S

- It means, if a problem is large than breaking and solving all problems and then combining the solutions can also solve the problem.
- we should have a method of combining sub-solutions.

    e.g. if problem is sort then, sub-problems will be sort. If problem is finding best-ways, then sub-problems will be about finding the best ways.


#### Algorithm

        DAC (P)
        {
            if(small(p))
            {
                S(P);
            }
            else
            {
                divide P into P1,P2,P3......Pk
                Apple DAC(P1), DAC(P2),...,DAC(Pk)
                S = Combine(DAC(P1), DAC(P2),...,DAC(Pk))
            }
        }



Notable Related Problems:

1. Binary-Search
2. Finding Maximum and Minimum
3. Merge Sort
4. Quick Sort
5. Matrix Multiplication
