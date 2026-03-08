class Node{
constructor(data){
this.data = data
this.left = null
this.right = null
this.height = 1
}
}

let root = null

function height(n){
return n ? n.height : 0
}

function getBF(n){
return height(n.left) - height(n.right)
}

function rightRotate(y){

let x = y.left
let T2 = x.right

x.right = y
y.left = T2

y.height = Math.max(height(y.left),height(y.right)) + 1
x.height = Math.max(height(x.left),height(x.right)) + 1

return x
}

function leftRotate(x){

let y = x.right
let T2 = y.left

y.left = x
x.right = T2

x.height = Math.max(height(x.left),height(x.right)) + 1
y.height = Math.max(height(y.left),height(y.right)) + 1

return y
}

function insert(node,key){

if(!node)
return new Node(key)

if(key < node.data)
node.left = insert(node.left,key)

else if(key > node.data)
node.right = insert(node.right,key)

else
return node

node.height = 1 + Math.max(height(node.left),height(node.right))

let bf = getBF(node)

// LL
if(bf > 1 && key < node.left.data)
return rightRotate(node)

// RR
if(bf < -1 && key > node.right.data)
return leftRotate(node)

// LR
if(bf > 1 && key > node.left.data){
node.left = leftRotate(node.left)
return rightRotate(node)
}

// RL
if(bf < -1 && key < node.right.data){
node.right = rightRotate(node.right)
return leftRotate(node)
}

return node
}

function insertNode(){

let val = document.getElementById("value").value

if(val === "") return

val = parseInt(val)

root = insert(root,val)

renderTree(root)

document.getElementById("value").value = ""
}

function renderTree(node){

let container = document.getElementById("tree")
container.innerHTML = ""

function preorder(n){

if(!n) return

let div = document.createElement("div")
div.className = "node"
div.innerText = n.data

container.appendChild(div)

preorder(n.left)
preorder(n.right)

}

preorder(node)

}