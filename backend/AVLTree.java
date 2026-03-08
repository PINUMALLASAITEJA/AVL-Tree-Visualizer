import java.util.*;

class AVLNode {
    int data;
    int height;
    AVLNode left, right;

    AVLNode(int data){
        this.data = data;
        this.height = 1;
    }
}

class AVLTree {

    int height(AVLNode n){
        if(n==null) return 0;
        return n.height;
    }

    int getBF(AVLNode n){
        if(n==null) return 0;
        return height(n.left) - height(n.right);
    }

    AVLNode rightRotate(AVLNode y){

        AVLNode x = y.left;
        AVLNode T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = 1 + Math.max(height(y.left),height(y.right));
        x.height = 1 + Math.max(height(x.left),height(x.right));

        return x;
    }

    AVLNode leftRotate(AVLNode x){

        AVLNode y = x.right;
        AVLNode T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = 1 + Math.max(height(x.left),height(x.right));
        y.height = 1 + Math.max(height(y.left),height(y.right));

        return y;
    }

    AVLNode insert(AVLNode node,int key){

        if(node==null)
            return new AVLNode(key);

        if(key < node.data)
            node.left = insert(node.left,key);

        else if(key > node.data)
            node.right = insert(node.right,key);

        else
            return node;

        node.height = 1 + Math.max(height(node.left),height(node.right));

        int bf = getBF(node);

        // LL
        if(bf > 1 && key < node.left.data)
            return rightRotate(node);

        // RR
        if(bf < -1 && key > node.right.data)
            return leftRotate(node);

        // LR
        if(bf > 1 && key > node.left.data){
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // RL
        if(bf < -1 && key < node.right.data){
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    void preorder(AVLNode root){
        if(root!=null){
            System.out.print(root.data+" ");
            preorder(root.left);
            preorder(root.right);
        }
    }
}

public class AVLTreeTest {

    public static void main(String[] args){

        AVLTree tree = new AVLTree();
        AVLNode root = null;

        int arr[] = {10,20,30,40,50,25};

        for(int x : arr){
            root = tree.insert(root,x);
        }

        System.out.println("Preorder traversal:");
        tree.preorder(root);
    }
}