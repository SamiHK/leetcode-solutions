package tree;

class SampleBST {
    public static void main(String[] args) {
        Tree myTree = new Tree();
        myTree.insertValue(20);
        myTree.insertValue(9);
        myTree.insertValue(13);
        myTree.insertValue(21);
        myTree.insertValue(14);
        System.out.println(myTree.toString());
        System.out.println(myTree.containsValue(20));
        System.exit(0);
    }
}

class Tree {
    private Node rootNode;

    /**
     * Create new Node with value and insert into this Tree
     * @param value Initial value for new Node
     */
    public void insertValue(int value) {
        insertNode(new Node(value));
    }

    /**
     * Insert new Node into this Tree
     * @param newNode Node to be inserted into this Tree
     */
    public void insertNode(Node newNode) {
        if (rootNode == null) {
            rootNode = new Node(newNode.getValue());
        } else {
            insertNode(rootNode, newNode);
        }
    }

    /**
     * Search this tree for a value
     *
     * @param value Value to be searched in this Tree
     * @return True if this tree contains value
     */
    public boolean containsValue(int value) {
        if (getNode(rootNode, value) == null) {
            return false;
        }
        return true;
    }

    /** 
     * Get Node in this Tree that contains value
     *
     * @param value Value to be searched within this Tree
     * @return Node that matches value or null if no match found
     */
    public Node getNode(Node currNode, int value) {
        if (currNode == null)
            return null;
        if (currNode.getValue() == value)
            return currNode;
        if (value < currNode.getValue())
            return getNode(currNode.getleft(), value);
        return getNode(currNode.getright(), value);
    }

    /**
     * Insert a new node into this tree
     *
     * @param currNode Current node we are comparing to newNode
     * @param newNode     New node that is to be inserted
     */
    private void insertNode(Node currNode, Node newNode) {
        if (newNode.getValue() < currNode.getValue()) {
            if (currNode.getleft() == null)
                currNode.setleft(newNode);
            else
                insertNode(currNode.getleft(), newNode);
        }
        if (newNode.getValue() > currNode.getValue()) {
            if (currNode.getright() == null)
                currNode.setright(newNode);
            else
                insertNode(currNode.getright(), newNode);
        }
    }

    /**
     * @return String representation of this Tree
     */
    @Override
    public String toString() {
        if (rootNode != null) {
            return rootNode.toString();
        }
        return "";
    }
}

class Node {
    private Node left;
    private Node right;
    private int value;

    /**
     * Node constructor with initial Node value
     *
     * @param value Initial value for this node
     */
    public Node(int value) {
        left = null;
        right = null;
        this.value = value;
    }

    /**
     * Set left node pointer for this Node
     *
     * @param node Left node for this Node
     */
    public void setleft(Node node) {
        this.left = node;
    }
    /**
     * Set right node pointer for this Node
     *
     * @param node Right node for this Node
     */
    public void setright(Node node) {
        this.right = node;
    }
    /**
     * Set value for this Node
     *
     * @param value Value for this Node
     */
    public void setValue(int value) {
        this.value = value;
    }

    /**
     * @return Left node for this Node
     */
    public Node getleft() {
        return left;
    }
    /**
     * @return Right node for this Node
     */
    public Node getright() {
        return right;
    }
    /**
     * @return Current value for this Node
     */
    public int getValue() {
        return value;
    }

    /**
     * @return String representation of this Node
     */
    @Override
    public String toString() {
        String result = value + "";
        if (left != null) result = left.toString() + " - " + result;
        if (right != null) result = result + " - " + right.toString();
        return result;
    }
}
