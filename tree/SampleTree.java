package tree;

import java.util.ArrayList;
import java.util.List;


class SampleTree {
    public static void main(String[] args) {
        Node<String> parentNode = new Node<String>("Parent"); 
        Node<String> childNode1 = new Node<String>("Child 1", parentNode);
        Node<String> childNode2 = new Node<String>("Child 2");     

        childNode2.setParent(parentNode); 

        Node<String> grandchildNode = new Node<String>("Grandchild of parentNode. Child of childNode1", childNode1); 
        List<Node<String>> childrenNodes = parentNode.getChildren();

        for(Node node : childrenNodes) {
            System.out.println(node.getData());
        }
    }
}

class Node<T> {
    private List<Node<T>> children = new ArrayList<Node<T>>();
    private Node<T> parent = null;
    private T data = null;

    public Node(T data) {
        this.data = data;
    }

    public Node(T data, Node<T> parent) {
        this.data = data;
        this.setParent(parent);
    }

    public List<Node<T>> getChildren() {
        return children;
    }

    public void setParent(Node<T> parent) {
        parent.addChild(this);
        this.parent = parent;
    }

    public void addChild(T data) {
        Node<T> child = new Node<T>(data);
        this.children.add(child);
    }

    public void addChild(Node<T> child) {
        this.children.add(child);
    }

    public T getData() {
        return this.data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public boolean isRoot() {
        return (this.parent == null);
    }

    public boolean isLeaf() {
        return this.children.size() == 0;
    }

    public void removeParent() {
        this.parent = null;
    }
}

// Credit to https://stackoverflow.com/questions/19330731/tree-implementation-in-java-root-parents-and-children
