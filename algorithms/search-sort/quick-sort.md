## Quick Sort
Quick Sort is a Divide and Conquer Algorithm, it uses this strategy. It means it will split the problem into sub-problems and solve those problems.


- In Quick Sort **elements arrange themselves** in their sorted order.
- We often create an **Extra Space here and fill it with Infinity(Maximum Number)** and string datatype have largest as **\0**;
- It also follows **partitioning** strategy
------------------------------------------------------------------------
        l                     m                         h     

        0     1    2    3     4     5    6    7    8    9
    A [10]  [16]  [8]  [12]  [15]  [6]  [3]  [9]  [5]  [Infinity]

        i                                               j    
------------------------------------------------------------------------

    **partitioning** 
    - We need to find the partitioning posiiton of PIVOT i.e. 10. 
    - A partitioning position is a point where all elements lesser than PIVOT are at the left side and all elements greater than PIVOT are at the right side.
    - We will check for greaters numbers on RIGHT side and bring them to LEFT side, vice versa(check for lesser numbers of LEFT and bring them to RIGHT).
    - for this purpose the Algorithm starts from:
  
    pivot = 10;
    i = pivot
    j = Infinity

    i -> search for elements which are greater, i.e. increment (i) untill you find next element greater PIVOT
    j -> search for elements which are lesser, i.e. decrement (j) untill you find previous element lesser then PIVOT
    if (i > j) that means the search ends here.


    START: 

    CASE: i=0, j=9;
    (i<j) true
    Found A[i+1] >= PIVOT
    Found A[j-1] < PIVOT
    SWAP(A[i+1], A[j-1]) => S(16,5)


        0    1    2    3     4     5    6    7    8      9
    A [10]  [5]  [8]  [12]  [15]  [6]  [3]  [9]  [16]  [Infinity]

             i                                    j  



    CASE: i=1, j=8;
    (i<j) true
    Found A[i+2] >= PIVOT
    Found A[j-1] < PIVOT
    SWAP(A[i+2], A[j-1]) => S(12,9)

        0     1    2    3     4     5    6    7    8    9
    A [10]  [16]  [8]  [9]   [15]  [6]  [3]  [12]  [5]  [Infinity]

                        i                      j   



    CASE: i=3, j=7;
    (i<j) true
    Found A[i+1] >= PIVOT
    Found A[j-1] < PIVOT
    SWAP(A[i+1], A[j-1]) => S(15,3)

        0     1    2    3     4     5    6    7    8    9
    A [10]  [16]  [8]  [9]   [3]   [6]  [15] [12] [5]  [Infinity]

                              i          j
                        
    
    CASE: i=4, j=6;
    (i<j) true
    Found A[i+2] >= PIVOT
    Found A[j-1] < PIVOT
    SWAP(A[i+2], A[j-1]) => S(15,6)

        0     1    2    3     4     5    6    7    8    9
    A [10]  [16]  [8]  [9]   [3]   [15] [6] [12] [5]  [Infinity]

                                    j    i

    
    CASE: i=6, j=5;
    (i<j) flase
    FOUND PIVOT ORDER/POSITION = j
    SWAP(A[j], PIVOT) => S(15,10)
    DISCONTINUE (all elements left side are smaller than PIVOT(10), all elements on right side are greater than PIVOT(10))

        0     1    2    3     4     5    6    7    8    9
    A [15]  [16]  [8]  [9]   [3]   [10] [6] [12] [5]  [Infinity]

                                    j    i
      --------------------------  -----  -----------------------
      unsorted list               sorted   unsorted list


    - Bounds are created between unsorted list
    - Perform QuickSort on the partitioned lists recursively.



## Algorithm Partition
-------------------------------------------------------------------------
        l                                              h     

        0     1    2    3     4     5    6    7    8    9
    A [10]  [16]  [8]  [12]  [15]  [6]  [3]  [9]  [5]  [Infinity]

        i                                               j
-------------------------------------------------------------------------  

    Partition(l, h){

        pivot = A[l]; //A is list
        i = l, j = h;

        while(i < j)
        {
            # keep incremenmting (i) untill finds greater/equal value
            do{
                i++;
            } while (A[i] <= pivot)  // terminating



            # keep decremenmting (i) untill finds lesser value
            do{
                j--;
            } while (A[j] >  pivot) // terminating



            # Swap A(i) with A(j) untill (i) is smaller then (j).
            if( i < j ){
                
                swap(A[i], A[j]);

            }
        }
        

        # if low(l) becomes greater than high(h) then it is the Order of Pivot.
        
        return j;
    }

    Note: high (h) is added as infinity in the first recursion to be the largest value in strings it can be '\0'.  In next recursions high (h) will be the point/index where the PIVOT will be ORDERED.


    ANOTHER OR ONE WAY APPROACH copied from GeeksForGeeks


    /* This function takes last element as pivot, places
    the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
    to left of pivot and all greater elements to right
    of pivot */

    partition (arr[], low, high)
    {
        // pivot (Element to be placed at right position)
        pivot = arr[high];  
    
        i = (low - 1)  // Index of smaller element and indicates the 
                    // right position of pivot found so far

        for (j = low; j <= high- 1; j++)
        {
            // If current element is smaller than the pivot
            if (arr[j] < pivot)
            {
                i++;    // increment index of smaller element
                swap arr[i] and arr[j]
            }
        }
        swap arr[i + 1] and arr[high])
        return (i + 1)
    }


----------------------------------------------------------------------------------------

## Quick Sort Algotithm


    /* low  --> Starting index,  high  --> Ending index */
    quickSort(arr[], low, high)
    {
        if (low < high)
        {
            /* pi is partitioning index, arr[pi] is now
            at right place */
            pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);  // Before pi
            quickSort(arr, pi + 1, high); // After pi
        }
    }

----------------------------------------------------------------------------------------


### Analysis of Quick Sort Algorithm

    - It is using Divide and Conquer Algo
    - It is using Partitioning Algo to find position of Pivot to divide the list.
    
    - Assume that we always get the PIVOT as a result of partioning at the middle.
    - Suppose if we are dividing the list of (n) elements  into (2) every time then, how much time for levels(k)?

        n/2^k = 1
        
        n = 2^k
        
        log(n) = k
          2  
        
       k = log(n) 

       **Partitioning time = O(log(n)) **

       ** Quick Sort Time = O( n log (n))**
    

    Best Case = A purely random list, completely un-sorted, always breaking at the middle.
    Best Case:
    Runtime = O (n log(n))  ->  assuming always breaking at middle
    Space = O(log(n)) i.e. height of a tree.




    e.g. A sorted list [2,4,8,10,16,18,17]
    i.e. Quick Sort performs worst for almost sorted lists or mostly sorted list.

    Worst Case: Partitioning is always done at the beginning of the list.
    Worst Case:
    Runtime =  O (n * n);
    Space = O(n) i.e. complete list

    How to improve on Worst Case ????
    If we choose the PIVOT as the middle element in a mostly sorted list then it will break list from middle.
    The worst case will become best case.


    How to void worst case?
    1. Select MIDDLE element as PIVOT. if list is sorted it will arrange it for best case i.e. O(n log(n)), can be O(n * n) for some arrangements, we cannot remove these changes.
    2. Select Random element as PIVOT. If we randomly select PIVOT it may be possible we may hit Best Case O(n log n) or even the worst case O(n * n), the runtime will be between best <-> worst case.
    



