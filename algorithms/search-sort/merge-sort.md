## Merge Sort
Sorting Algorithms that use to sort (n) sorted lists
It is a Recursive Process.

PROS:
- Large size list(apply divide and conquer)
- Best for Linked Lists 
- External Sorting
- Stable (orders of duplicates is maintained -> best for record keeping i.e. If record for 400 test runs in an innings is for Brian Lara then if another person Brian Lara(AUS) hits exactly 400 runs in a test innings then the record would still be with the First Brian Lara (WI)).


CONS:
- Extra space (not in-place sorting algo)
- No small problem its is slower, since it takes time in recursions. (for List <= 15) -> **Insertion Sort(O(n)square)** is faster than **Merge Sort(O(n log(n)))**. If list is smaller we use insertion sort as a part of Merge Sort.
- Only reason to use Inserion/Bubble sort is the stability of keeping order of records.
- Recursive, i.e. uses stacks in tracing tree merge sort i.e. **Log(n)** stack space.
- Extra Space for auxillary space i.e. **O(n + log(n))**;

------------------------------------------
    Explanation (Arrays)

    A(i)   B(j)    X(k)
    1      2       1
    3      4       2
    5      6       3
    6      7       4 
    10             5
    11             6
                   6
                   7
                   10
                   11 

-------------------------------------------

    Explanation (Linked Lists)

    
    A   [2, ] -> [8, ] -> [12, ] -> null 


    B   [3, ] -> [9, ] -> [11, ] -> null


    AB  [2, ] -> [3, ] -> [8, ] -> [9, ] -> [11, ] -> [12, ] -> null 
------------------------------------------------

##### Algorithm (Iterative)

        function (A, B, m, n){
            <!-- m and n are lengths of lists A and B respectively -->
            i = 0, j = 0, k = 0;
            X = [];
            while(i <= m && j <= n) {
                if(A[i] < B[j]){
                    X[k++] = A[i++];
                } else {
                    X[k++] = B[j++];
                }
            }

            // If there are remaining elements in array A
            for( ; i <= m; ){
                X[k++] = A[i++];
            }

            // If there are remianing elements in array B
            for( ; j <= n; ){
                X[k++] = B[j++];
            }

        }




### 2-way Merge Sort
It is an Iterative process using Loops

CASE # 1

    A   B   C   D
    1   2   3   4
    5   6   7   8
    \   /   \   /
      1       3
      2       4
      5       7
      6       8
      \      /
       \    /
         1
         2
         3
         4
         5
         6
         7
         8


CASE # 2

    A   B   C   D
    1   2   3   4
    5   6   7   8
    \   /   |   |
      1     |   |
      2     |   |
      5     |   |
      6     |   |
      \    /    /
       \  /    /
         1    |  
         2    |
         3    |
         5    |
         6    |
         7    |
         \   /
           1
           2
           3
           4
           5
           6
           7
           8  


CASE # 3 -> Vice Versa of Case 2.



CASE # 4 -> Single element lists ... Classical Merge Sort

    Consider all elements as list and a list with single element is already sorted
    Now the merging can be applied using MergeSort.

         1   2   3   4   5   6   7   8   9
    A = [9] [3] [7] [5] [6] [4] [8] [2] [0]
         \   /   \   /  \   /   \    /   |
          3  9    5  7   4  6    2  8    0 
            \       /       \      /     |       1st pass
            3,5,7,9         2,4,6,8      0       2nd pass
                \              /         |
                  2,3,4,5,6,7,8,9        0       3rd pass
                         \               |
                          \              |
                         2,3,4,5,6,7,8,9,0       4th pass

   
**Analysis**
    Elements = n
    Passes = log(n)

    Time = O(n * log(n));
    Space = O(n);

  

### Merge Sort Algorithm
It is a Recursive Algorithm

    
         1   2   3   4   5   6   7   8 
    A = [9] [3] [7] [5] [6] [4] [8] [2]
         l          mid                h


    
    Algorithm MergeSort(l, h){

        //It means at least there are more than one elements
        if (l > h){
            mid = Floor[(l + h)/2];

            MergeSort(l, mid);
            MergeSort(mid+1,h);

            Merge(l,mid,h);
        }

    }

**Analysis**
    Elements = n
    Passes = log(n)

    Time = O(n * log(n));
    Space = O(n);




## Merge Sort Single Linked List

Is often preferred for sorting a linked list. The slow random-access performance of a linked list makes some other algorithms (such as quicksort) perform poorly, and others (such as heapsort) completely impossible.

https://www.geeksforgeeks.org/merge-sort-for-linked-list/

    MergeSort(head)
    1) If the head is NULL or there is only one element in the Linked List 
        then return.
    2) Else divide the linked list into two halves.  
          FrontBackSplit(head, &a, &b); /* a and b are two halves */
    3) Sort the two halves a and b.
          MergeSort(a);
          MergeSort(b);
    4) Merge the sorted a and b (using SortedMerge()) 
       and update the head pointer.
         head = SortedMerge(a, b);