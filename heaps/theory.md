## Heaps Data Structure

Covering the following topics will help building logics using Heap as a Data Structure.

    - Array Representation of BST
    - Complete Binary Trees
    - Heap
    - Heap Insert & Delete
    - Heap Sort
    - Heapify
    - Priority Queues


### Representation of Binary Tree using arrays.
    - if a Node is at index (i)
        a. Its left child will be at 2*(i)
        b. Its right child will be at 2*(i) + 1
        c. Its parent will be CEIL[i/2]

    - follow these formulas and fill level by level and if we find missing childs then leave gaps/empty there


              a
           /     \
          b       c
         /  \    /  \
       d     e  f    g

       arr = [A,B,C,D,E,F,G]
              1,2,3,4,5,6,7



                 a
              /     \
             b       c
           /   \   
          d      e  

       arr = [A,B,C,D,E]
              1,2,3,4,5




                 a
              /     \
             b       c
           /   \   
          d      e  

       arr = [A,B,C,-,-,D,E]
              1,2,3,4,5,6,7

    


### COMPLETE Binary Tree and FULL Binary 
    * FULL BINARY TREE
    - In Full Binary Tree, at any height of this type of binary tree we have maximum number of nodes
    - If height of binary tree is (h) then, a full-binary-tree have nodes = [2 power (h+1) - 1 ] 

    * COMPLETE BINARY TREE
    - A full binary tree is also a complete binary tree
    - If the array representation of binary tree have missing elements then it is not a complete binary tree.
    - If the array representation of binary tree does not have missing elements then it is a complete binary tree.
    - A complete binary tree can have above levels with no childs, provided that array representation is continuous
    - A complete binary tree is a Full-Binary Tree with height upto (h-1), on last level the elements are filled from left-to-right.
    - the height of complete binary tree will be *log(n)*
  

    -* NOTE: if there are spaces after last element(n) then it is not considered in the bounds of tree representation ann can be ignores



-----------------------------------------
FULL BINARY TREE

       0|          a
                /     \
       1|      b       c
             /   \    /  \
       2|   d     e  f    g

       arr = [A,B,C,D,E,F,G]
              1,2,3,4,5,6,7
       h = 2
       nodes = 2(power(2+1)) - 1
       nodes = 2 power(3) - 1
       nodes = 8 - 1
       nodes = 7
       
       Yes we have 7 nodes, hence, Full Binary Tree.

----------------------------------------------
COMPLETE BINARY TREE


       0|          a
                /     \
       1|      b       c
             /   \  
       2|   d     e 

       arr = [A,B,C,D,E]
              1,2,3,4,5

       since array is not having empty/gaps indices it is a complete binary tree


       example on /NOT a COMPLETE/FULL binary tree

                 a
              /     \
             b       c
                   /   \   
                  d      e  

       arr = [A,B,C,-,-,D,E]
              1,2,3,4,5,6,7

       here the above tree is niether complete nor a full binary tree.
-------------------------------------------------------------------------


### Heap
A **Heap is special type of Complete Binary Tree** 

There are two types of Heap:

- MAX HEAP: If the nodes are arranged in a way that every Parent Node is having a value **greater than or equal** to all of its decendents(child nodes). Root is having the largest value. Duplicates are allowed here.
  
       a. Insertion happens at the last free space, it will voilate max-heap conditions, to fix that we will adjust heap by comparing the inserted element with its parent, if inserted node have value greater that parent then we must swap the positions of parent and inserted node, keep doing this untill inserted node is less than the parent node.
 
       b. Deletion, we cannot delete any other element other than ROOT element, deleting root will keep the elements in a heap representation. When root is deleted the last element would have to adjust its position and become root, it will make a complete binary tree but if it is not a Max-Heap, we will adjust elements.Compare new root with childs, and the child with greater value will take its place, the process will go-on untill the Max-Heap condiitons are satisfied.

       c. SORTING: notice that if you delete the root and store it at the last free space, and keep doing it then the heap size will reduce and last free spaces will be filled in a increasing order, if you delete one by one till all nodes are deleted then in this was you will find a Sorted Array, the process of deleting root of heap and filling up free space is called Heap Sort.

       d. HEAP SORT: heap sort have two steps, for a given set of elements create a heap by inserting all the elements one by one. Then once the elememt if formed, delete the elements one by one, the elements will be sorted.
       - create heap by inserting
       - delete heap and storing roots in last freed-up space
   
- MIN HEAP: If the nodes are arranged in a way that every Parent Node is having a value **less than or equal** to all of its decendents(child nodes). Root is having the smallest value. Duplicates are allowed here.



----------------------------
### MAX HEAP

       0|          50
                /     \
       1|      30      20
              /   \    /  \
       2|   15   10  8    16

       H = [50,30,20,15,10,8,16]
            1 ,2 ,3 ,4 ,5 ,6, 7


**INSERT: 60**

       Inserting at the last free space
       H = [50,30,20,15,10,8,16,60]
            1 ,2 ,3 ,4 ,5 ,6, 7, 8

       compare inserted node H[8]=60 with its parent H[8/2]=15, since 60>15 lets swap positions
       H = [50,30,20,60,10,8,16,15]
            1 ,2 ,3 ,4 ,5 ,6, 7, 8

       compare inserted node H[4]=60 with its parent H[4/2]=30, since 60>30 lets swap positions
       H = [50,60,20,30,10,8,16,15]
            1 ,2 ,3 ,4 ,5 ,6, 7, 8
       
       compare inserted node H[2]=60 with its parent H[2/2]=50, since 60>50 lets swap positions
       H = [60,50,20,30,10,8,16,15]
            1 ,2 ,3 ,4 ,5 ,6, 7, 8

       Insertion process ends here as the representation satisfies max-heap conditions. 
       Direction of adjustment is upwards in Max-Heap Insertion

       **Analysis of Insertion**
       How many swaps? depends on height of a binary tree. Height of complete binary tree can be traversed in O(log n)
       -Time Complexity = O(log n) Worst Case, O(1) Best case
       -Space Complexity = O(1).


       **DELETE: 60**

       Deleting at the root position and replacing it with last node, in this case 60 is deleted and replaced by 15. 
       Note that after deleting the root, you can store it on the previous last node position, this position and deleted node will not be part of heap.
       H = [15,50,20,30,10,8,16,60]
            1 ,2 ,3 ,4 ,5 ,6, 7, 8

       since root is at H[1], compare H[1] root with childs H[2], H[3] and swap with bigger child.
       i.e. compare 15 with 50 and 20 and since 50 is bigger relace root(15) with 50, and new root becomes R(50) 
       H = [50,15,20,30,10,8,16]
            1 ,2 ,3 ,4 ,5 ,6, 7

       since 15 is now at H[2], compare H[2] root with childs H[4], H[5] and swap with bigger child.
       i.e. compare 15 with 30 and 10 and since 30 is bigger relace with 15. 
       H = [50,30,20,15,10,8,16]
            1 ,2 ,3 ,4 ,5 ,6, 7

       now since childs of 15 does not exist it is adjusted to new position and deletion process ends, last space is now free.

       **Analysis of Insertion**
       How many swaps? depends on height of a binary tree. Height of complete binary tree can be traversed in O(log n)
       -Time Complexity = O(log n) Worst Case, O(1) Best case/only when there is only one node.
       -Space Complexity = O(1).

----------------------------
### MIN HEAP


       0|          10
                /     \
       1|      30      20
              /   \    /  \
       2|   35   40  32    25

       H = [10,30,20,35,40,32,25]
             1, 2, 3, 4, 5, 6, 7


      Difference form Max heap is that, while inserting nodes are inserted at the end of array and the compared with parent, if parent is greater in value then swapped... process continues till root. 

       INSERT = 11;

       0|          10
                /     \
       1|      30      20
             /   \    /  \
       2|   35   40  32    25
           /
       3| 11 


       0|          10
                /     \
       1|      30      20
             /   \    /  \
       2|   11   40  32    25
           /
       3| 35

       0|          10
                 /     \
       1|      11      20
             /   \    /  \
       2|   30   40  32    25
           /
       3| 35 

       H = [10,11,20,30,40,32,25,35]
             1, 2, 3, 4, 5, 6, 7, 8

       One Insertion Time  = O(log(n))
       One Insertion Space = O(1)


       DELETE = 11;

       0|          35
                /     \
       1|      11      20
              /   \    /  \
       2|   30   40  32    25


       0|          11  
                 /     \
       1|      35      20
              /   \    /  \
       2|   30   40  32    25


       0|          11  
                /     \
       1|      30      20
              /   \    /  \
       2|   35   40  32    25
       

       H = [11,30,20,35,40,32,25,10]
            1, 2, 3, 4, 5, 6, 7, 8
       Different from Max-heap is that, after deleting root and replacing it with the last element.
       One Deletion Time  = O(n log(n))
       One Deletion Space = O(1)

----------------------------


### HEAP SORT

       STEP # 1 is creating a heap(min/max) from array.

       array = [10,20,15,30,40]
                1 ,2 , 3, 4, 5
       <!-- insert first node as root -->

       10 is added to heap, since there is no node to compare it is valid
       
       0|          10 (max-heap & min-heap)

       array = [10,20,15,30,40]
                 1 ,2 , 3, 4, 5
       <!-- insert second node -->

       20 is added to heap, since 20 is greated than 10, swap places

       0|          20
                 /
       1|       10  
       array = [20,10,15,30,40]
                 1 ,2 , 3, 4, 5
       <!-- insert third node -->
       15 is added to last node, and since 15 is lesser that 20(root), no adjustment needed.

       0|          20
                 /   \
       1|       10     15
       array = [20,10,15,30,40]
                1 ,2 , 3, 4, 5

       <!-- insert fourth node -->

       30 is added to end of heap and since it is greater than 10 and than greater than 20 it will replace them

       0|          30
                 /   \
       1|       20     15
               /
       3|     10
       array = [30,20,15,10,40]
                 1 ,2 , 3, 4, 5


       <!-- insert last node -->
       40 is added to end of heap and since it is greater than 20 and than greater than 30 it will replace them


       0|          30
                 /   \
       1|       20     15
               /
       3|     10    
       array = [40,30,15,10,20]
                1 ,2 , 3, 4, 5

       THIS IS OUR MAX-HEAP AFTER EXHAUSTING INSERTION
       it is not sorted in ascending/descending order.

       0|          40
                 /   \
       1|       30     15
               /  \
       3|     10   20
       array = [40,30,15,10,20]
                1 ,2 , 3, 4, 5


       COMPLEXITY = we inserted (n) elememts on a tree of height log(n) 
       TIME = O(n log(n))
       Space =  O(n)

       STARTING TO DELETE;

       <!-- delete 40 -->

       deleting 40 and replacing with last element 20... now comparing 20 with childs 30 and 15, since 30 is larger replacing it with 30, now checking 20 with 10.. it stays here... keep in mind that the place at which 40 was swapped is no longer in heap.

       0|          30
                 /   \
       1|       20     15
               /  
       3|     10   
       array = [30,20,15,10,40] -> 
                1 ,2 , 3, 4, 5

       <!-- delete 30 -->

       deleting 30 and relacing last node 10, comparing 10 with 20 and 15... since 20 is largest repling it with 20..

       0|          20
                 /   \
       1|       10     15  
       array = [20,10,15,30,40] -> 
                1 ,2 , 3, 4, 5


       <!-- delete 20 -->

       deleting 20 and relacing last node 15, comparing 15 with 10 ..... since 15 is larger than child then it stays at its position



       <!-- delete 15 -->
       deleting 15 and relacing last node 10, since 10 have no nodes it stays in the position and our sorting ends when there are no more childs.
              
       array = [10,15,20,30,40] -> heap sorted
                1 ,2 , 3, 4, 5


       COMPLEXITY = we deleted (n) elements from binary tree of height log(n), and on every delete log(n) swaps are possible.

       Time = O(n log(n)) = worst case O(n) best case
       Space = O(n) = worst case, O(1) best case


----------------------------------------------------------------------------------------------


### Heapify


- Heapify is a procedure of creating a heap.
- In heap deletion / Insertion / heap sorting the direction of adjustment was towards ROOT i.e. bottom-up approach i.e. inserting at leaf and adjusting upward.

- In Heapify the direction is different. Consider the example below, it is a complete binary tree and full binary tree but it is not a Max-Heap... 
- What we want here is a Max-Heap

- In Heap creation we always insert elements of array into heap from Left->Right i.e. from first index to last index, adjusting elements upwards.
- In Heapify we start from Right->Left and adjust elements downwards towards leafs.

- Base Case: if an element/node doesn't have any further nodes then it is in heap, no swapping/shuffling required.

<!-- ------------------------------------------------ -->
       0|          10  
                 /     \
       1|      20      15
              /   \    /  \
       2|   12   40  25   18

       array = [10,20,15,12,40,25,18]
                1 ,2 , 3, 4, 5, 6, 7


       Lets HEAPIFY.


       CHECK 18 (it is already in heap)

       0|          10  
                /     \
       1|      20      15
             /   \    /  \
       2|   12   40  25   18

       array = [10,20,15,12,40,25,18]
              1 ,2 , 3, 4, 5, 6, 7

       CHECK 25 (it is already in heap)

       0|          10  
                /     \
       1|      20      15
             /   \    /  \
       2|   12   40  25   18

       array = [10,20,15,12,40,25,18]
              1 ,2 , 3, 4, 5, 6, 7




       CHECK 40 (it is already in heap)

       0|          10  
                /     \
       1|      20      15
             /   \    /  \
       2|   12   40  25   18

       array = [10,20,15,12,40,25,18]
              1 ,2 , 3, 4, 5, 6, 7


       CHECK 12 (it is already in heap)

       0|          10  
                 /     \
       1|      20      15
              /   \    /  \
       2|   12   40  25   18

       array = [10,20,15,12,40,25,18]
              1 ,2 , 3, 4, 5, 6, 7


       CHECK 15 (the childs of 15 are larger than it and choosing the greatest one and swapping it with 25)

       0|          10  
                 /     \
       1|      20      25
             /   \    /  \
       2|   12   40  15   18

       array = [10,20,25,12,40,15,18]
              1 ,2 , 3, 4, 5, 6, 7


       CHECK 20 (the right child of 20 are is larger, swapping it with 20)

       0|          10  
                 /     \
       1|      40      25
              /   \    /  \
       2|   12   20  15   18

       array = [10,40,25,12,20,15,18]
              1 ,2 , 3, 4, 5, 6, 7



       CHECK 10 (the children of 10 are is larger, swapping it with biggest one i.e. with 40 .... now upon checking again 10 have one child greater, swapping it)

       0|          40  
                 /     \
       1|      10      25
              /   \    /  \
       2|   12   20  15   18

       0|          40  
                 /     \
       1|      20      25
              /   \    /  \
       2|   12   10  15   18

       array = [40,20,25,12,10,15,18]
              1 ,2 , 3, 4, 5, 6, 7


COMPLEXITY of HEAPIFY

       Time  = O(n)
       Space = O(1) -> always calculate extra space

       Heapify is faster than heap-creation by a factor of O(log n) and it uses less space by a factor of O(n)

----------------------------------------------------------------------------------------------


### Priority Queues:

- Actually Queue means FIF0 -> first to enter, first to out.
- But Priority Queues means that its not going to be FIFO strictly, elements will have some priority and based of element of greater priority it would be served and deleted from the queue.

<!-- --------------------------------------------------- -->
       In Priority queues, the elements value itself is a priority but based in the logic there are two examples of Priority Queues:

       a. Smaller Number Higher Priority 
       A = [8,6,3,10,5,4,9]
            1,2,3, 4,5,6,7 

       lets say here if we use and array for a priority queue and insert any element it will take O(1) to O(n) time based on the position we are entering.
       lets say we have find the element for serving with least value then searching also takes O(n) time.
       Lets say we sserved the last smallest number now we want to delete, here as well we would need O(n)

       **Time = O(n) + O(n) + O(n) = O(n)**


       Now....
       If we would choose Heap, instead of an array we could save time here. 
       Since we know a heap have Time complexity of Log(n) for both insertion and deletion
       **Time = O(log n) + O (log n) = O (log n)**


       If we have, Small Number --> Higher Priority, we can use Min-Heap as best solution.
            
            Min Heap

               3
            /     \
           5       4
         /  \     /  \
       10    8   6    9   

       
<!-- --------------------------------------------------- -->

       b. Larger Number Higher Priority
       B = [8,6,3,10,5,4,9]
            1,2,3, 4,5,6,7

       lets say here if we use and array for a priority queue and insert any element it will take O(1) to O(n) time based on the position we are entering.
       lets say we have find the element for serving with least value then searching also takes O(n) time.
       Lets say we sserved the last smallest number now we want to delete, here as well we would need O(n)

       **Time = O(n) + O(n) + O(n) = O(n)**


       Now....
       If we would choose Heap, instead of an array we could save time here. 
       Since we know a heap have Time complexity of Log(n) for both insertion and deletion
       **Time = O(log n) + O (log n) = O (log n)**


       If we have, Large Number --> Higher Priority, we can use Max-Heap as best solution.

           Max Heap

               10
            /     \
           8       9
         /  \     /  \
        6    5   3    4  


        TL:DR;
        Heap is best for implementing Priority Queues
        If you want smaller number priority -> Min Heap
        If you want larger number priority -> Max Heap