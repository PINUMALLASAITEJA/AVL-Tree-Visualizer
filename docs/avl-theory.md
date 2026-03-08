# AVL Tree – Self Balancing Binary Search Tree

## 1. Time Complexity of Binary Search Tree (BST)

A Binary Search Tree allows efficient searching, insertion, and deletion.

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Search    | O(log n)     | O(n)       |
| Insert    | O(log n)     | O(n)       |
| Delete    | O(log n)     | O(n)       |

Worst case happens when the tree becomes skewed.

Example of skewed BST:

1
 \
  2
   \
    3
     \
      4

This behaves like a linked list.

---

## 2. Why Do We Need a Balanced BST?

If the BST becomes skewed, the height becomes **n**, and operations degrade to **O(n)**.

Balanced trees maintain height close to **log(n)**, ensuring fast operations.

Self-balancing trees automatically restructure themselves during insertions and deletions.

---

## 3. Introduction to AVL Trees

AVL Tree is a self-balancing Binary Search Tree.

It maintains balance using a metric called the **Balance Factor**.

Balance Factor formula:

BF = height(left subtree) - height(right subtree)

Allowed values:

-1, 0, +1 → Balanced

If the balance factor becomes **+2 or -2**, the tree becomes unbalanced.

Rotations are used to restore balance.

---

## 4. Types of AVL Imbalance

### LL (Left Left)

Occurs when a node is inserted in the left subtree of the left child.

Solution: **Right Rotation**

### RR (Right Right)

Occurs when insertion happens in the right subtree of the right child.

Solution: **Left Rotation**

### LR (Left Right)

Occurs when insertion happens in the right subtree of the left child.

Solution:
1. Left Rotate
2. Right Rotate

### RL (Right Left)

Occurs when insertion happens in the left subtree of the right child.

Solution:
1. Right Rotate
2. Left Rotate

---

## 5. AVL Trees vs Red Black Trees

| Feature | AVL Tree | Red Black Tree |
|-------|---------|----------------|
| Balance | Strictly balanced | Loosely balanced |
| Search speed | Faster | Slightly slower |
| Insert/Delete | More rotations | Fewer rotations |
| Use case | Search-heavy systems | General-purpose structures |

Red-Black trees are used in many programming libraries like Java's TreeMap.