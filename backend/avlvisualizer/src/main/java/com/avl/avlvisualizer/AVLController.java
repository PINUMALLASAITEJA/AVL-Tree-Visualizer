package com.avl.avlvisualizer;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AVLController {

    private AVLTree tree = new AVLTree();

    @GetMapping("/insert")
    public RotationResponse insert(@RequestParam int value){

        TreeNode root = tree.insertValue(value);

        String rotation = tree.consumeRotation();

        return new RotationResponse(root,rotation);
    }

    @GetMapping("/tree")
    public TreeNode getTree(){
        return tree.root;
    }

    @GetMapping("/reset")
    public String reset(){
        tree.reset();
        return "Tree cleared";
    }

}