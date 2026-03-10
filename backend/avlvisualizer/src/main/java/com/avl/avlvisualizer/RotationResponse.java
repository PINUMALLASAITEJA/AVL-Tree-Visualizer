package com.avl.avlvisualizer;

public class RotationResponse {
    public TreeNode root;
    public String rotation; // "LL", "RR", "LR", "RL", or "NONE"

    public RotationResponse(TreeNode root, String rotation) {
        this.root = root;
        this.rotation = rotation;
    }
}