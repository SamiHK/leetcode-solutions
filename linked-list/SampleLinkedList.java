

public class SampleLinkedList {
    public static void main(String[] args) {
        
        LinkedList ll = new LinkedList();
        ll.print();

        LinkedList list = new LinkedList();

        list.insert(1, null);
        list.insert(2, null);
        list.insert(3, null);
        list.insert(4, null);
        list.insert(5, null);
        list.print();
    }
}


class Node {
    private int value;
    private Node next;

    public Node(int value, Node next) {
        this.value = value;
        this.next = next;
    }

    public int getVal() {
        return value;
    }

    public void setVal(int value) {
        this.value = value;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }
}

class LinkedList {

    private Node head;

    public LinkedList() {
        this.head = null;
    }

    public void insert(int val, Node next) {
        Node newNode = new Node(val, next);

        if (this.head == null) {
            this.head = newNode;
        } else {
            Node current = this.head;
            while (current.getNext() != null) {
                current = current.getNext();
            }

            current.setNext(newNode);
        }
    }

    public Node getLastNode() {
        Node current = this.head;

        if (current == null) {
            return null;
        }

        while (current.getNext() != null) {
            current = current.getNext();
        }

        return current;
    }

    public Node find(int val) {
        Node current = this.head;

        if (current == null) {
            return null;
        }

        while (current.getNext() != null) {
            if (current.getVal() == val) {
                return current;
            }
            current = current.getNext();
        }

        return null;
    }

    public void print() {
        Node current = this.head;

        while (current != null) {
            System.out.print(current.getVal() + " ");
            current = current.getNext();
        }
    }

    public int length() {
        int count = 0;
        Node current = this.head;

        while (current != null) {
            count++;
            current = current.getNext();
        }

        return count;
    }

    public Node getHead() {
        return head;
    }

    public void setHead(Node head) {
        this.head = head;
    }
}