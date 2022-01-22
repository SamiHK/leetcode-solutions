package arrays;

import java.util.NoSuchElementException;


// Better implementation in LinkedList
class Main {

    public static void main(String[] args) {
        ArrayBasedQueue q = new ArrayBasedQueue(4);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);
        System.out.println(q.dequeue()); // 1
        System.out.println(q.dequeue()); // 2
        System.out.println(q.dequeue()); // 3
        System.out.println(q.dequeue()); // 4                        
    }
}

class ArrayBasedQueue {

    /**
     * Array of objects
     */
    private Object[] array;

    /**
     * Size of queue
     */
    int size = 0;

    /**
     * Since it is a queue, we need track of both head and tail
     * Initial values to be 0
     */
    int head = 0;
    int tail = 0;

    /**
     * Constructor to create new array based queue
     * 
     * @param capacity
     */
    public ArrayBasedQueue(int capacity) {
        array = new Object[capacity];
    }

    /**
     * Method to push a new item in queue
     * We will deal only with tail while adding new item
     * 
     * @param item
     */
    public void enqueue(Object item) {
        if (size == array.length) {
            throw new IllegalStateException("Cannot add to full queue");
        }
        array[tail] = item;
        tail = (tail + 1) % array.length;
        size++;
    }

    /**
     * Method to pop a item from queue
     * We will deal only with head while deleting a element
     * 
     * @return {@link Object}
     */
    public Object dequeue() {
        if (size == 0) {
            throw new NoSuchElementException("Cannot remove from empty queue");
        }
        Object item = array[head];
        array[head] = null;
        head = (head + 1) % array.length;
        size--;
        return item;
    }

    /**
     * Method to check the top item in queue
     * 
     * @return {@link Object}
     */
    public Object peek() {
        if (size == 0) {
            throw new NoSuchElementException("Cannot peek from empty queue");
        }
        return array[head];
    }

    /**
     * Method to check size of queue
     * 
     * @return {@link int}
     */
    public int size() {
        return size;
    }

    /**
     * Method to check if queue is empty
     * 
     * @return {@link boolean}
     */
    public boolean isEmpty() {
        return size == 0;
    }

}

// Credit to https://github.com/deepak-malik/Data-Structures-In-Java/blob/master/src/com/deepak/data/structures/Queue/ArrayBasedQueue.java