package com.avl.avlvisualizer;

public class AVLTree {

    public TreeNode root;

    private String lastRotation = "NONE";

    public String consumeRotation(){
        String r = lastRotation;
        lastRotation = "NONE";
        return r;
    }

    int height(TreeNode n){
        return n == null ? 0 : n.height;
    }

    int getBF(TreeNode n){
        return n == null ? 0 : height(n.left) - height(n.right);
    }

    TreeNode rightRotate(TreeNode y){

        TreeNode x = y.left;
        TreeNode t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = Math.max(height(y.left),height(y.right)) + 1;
        x.height = Math.max(height(x.left),height(x.right)) + 1;

        return x;
    }

    TreeNode leftRotate(TreeNode x){

        TreeNode y = x.right;
        TreeNode t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = Math.max(height(x.left),height(x.right)) + 1;
        y.height = Math.max(height(y.left),height(y.right)) + 1;

        return y;
    }

    TreeNode insert(TreeNode node,int key){

        if(node == null)
            return new TreeNode(key);

        if(key < node.data)
            node.left = insert(node.left,key);

        else if(key > node.data)
            node.right = insert(node.right,key);

        else
            return node;

        node.height = 1 + Math.max(height(node.left),height(node.right));

        int bf = getBF(node);

        // LL
        if(bf > 1 && key < node.left.data){
            lastRotation = "LL";
            return rightRotate(node);
        }

        // RR
        if(bf < -1 && key > node.right.data){
            lastRotation = "RR";
            return leftRotate(node);
        }

        // LR
        if(bf > 1 && key > node.left.data){
            lastRotation = "LR";
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // RL
        if(bf < -1 && key < node.right.data){
            lastRotation = "RL";
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    public TreeNode insertValue(int value){
        root = insert(root,value);
        return root;
    }

    public void reset(){
        root = null;
        lastRotation = "NONE";
    }

}