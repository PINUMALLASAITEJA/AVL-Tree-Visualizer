package com.avl.avlvisualizer;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AVLController {

    private AVLTree tree = new AVLTree();

    @GetMapping("/insert")
    public TreeNode insert(@RequestParam int value) {
        return tree.insertValue(value);
    }

    @GetMapping("/tree")
    public TreeNode getTree() {
        return tree.root;
    }

    @PostMapping("/reset")
    public String reset() {
        tree.reset();
        return "Tree cleared";
    }
}