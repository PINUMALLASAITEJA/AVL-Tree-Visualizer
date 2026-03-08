AVL Tree Visualizer
Project Overview

This project demonstrates the working of an AVL Tree, a self-balancing Binary Search Tree.
The project includes both the AVL Tree implementation in Java and a web-based visualization tool to illustrate AVL insertion and balancing operations.

Features

AVL Tree insertion

Automatic balancing using rotations

Visualization of tree structure

Interactive web interface

Implementation of four AVL rotations:

LL Rotation

RR Rotation

LR Rotation

RL Rotation

Project Structure
AVL-Tree-Visualizer
│
├── docs
│   └── avl-theory.md
│
├── backend
│   └── AVLTree.java
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
AVL Tree Concepts
Balance Factor
Balance Factor = height(left subtree) - height(right subtree)

Allowed values:

-1, 0, +1 → Balanced

If balance factor becomes +2 or -2, rotations are required.

AVL Rotations
LL Rotation

Right rotation is applied when insertion happens in the left subtree of the left child.

RR Rotation

Left rotation is applied when insertion happens in the right subtree of the right child.

LR Rotation

Left rotation followed by right rotation.

RL Rotation

Right rotation followed by left rotation.

Technologies Used

Java

HTML

CSS

JavaScript

Git

GitHub

How to Run the Visualizer

Open the following file in a browser:

frontend/index.html

Enter numbers and insert them to observe AVL balancing.