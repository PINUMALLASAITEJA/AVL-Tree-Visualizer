class Node{
constructor(data){
this.data=data
this.left=null
this.right=null
this.height=1
}
}

let root=null

function height(n){
return n?n.height:0
}

function getBF(n){
return height(n.left)-height(n.right)
}

function rightRotate(y){

document.getElementById("status").innerText="LL Rotation"

let x=y.left
let T2=x.right

x.right=y
y.left=T2

y.height=Math.max(height(y.left),height(y.right))+1
x.height=Math.max(height(x.left),height(x.right))+1

return x
}

function leftRotate(x){

document.getElementById("status").innerText="RR Rotation"

let y=x.right
let T2=y.left

y.left=x
x.right=T2

x.height=Math.max(height(x.left),height(x.right))+1
y.height=Math.max(height(y.left),height(y.right))+1

return y
}

function insert(node,key){

if(!node) return new Node(key)

if(key<node.data)
node.left=insert(node.left,key)

else if(key>node.data)
node.right=insert(node.right,key)

else
return node

node.height=1+Math.max(height(node.left),height(node.right))

let bf=getBF(node)

// LL
if(bf>1 && key<node.left.data)
return rightRotate(node)

// RR
if(bf<-1 && key>node.right.data)
return leftRotate(node)

// LR
if(bf>1 && key>node.left.data){
document.getElementById("status").innerText="LR Rotation"
node.left=leftRotate(node.left)
return rightRotate(node)
}

// RL
if(bf<-1 && key<node.right.data){
document.getElementById("status").innerText="RL Rotation"
node.right=rightRotate(node.right)
return leftRotate(node)
}

return node
}

function insertNode(){

let val=document.getElementById("value").value

if(val==="") return

val=parseInt(val)

root=insert(root,val)

renderTree(root)

document.getElementById("value").value=""
}

function clearTree(){
root=null
document.getElementById("tree").innerHTML=""
document.getElementById("status").innerText="Tree cleared"
}

function drawTree(node,x,y,gap){

if(!node) return

let svg=document.getElementById("tree")

let r=22

let circle=document.createElementNS("http://www.w3.org/2000/svg","circle")
circle.setAttribute("cx",x)
circle.setAttribute("cy",y)
circle.setAttribute("r",r)

svg.appendChild(circle)

let text=document.createElementNS("http://www.w3.org/2000/svg","text")
text.setAttribute("x",x)
text.setAttribute("y",y)
text.textContent=node.data

svg.appendChild(text)

// Balance Factor
let bfText=document.createElementNS("http://www.w3.org/2000/svg","text")
bfText.setAttribute("x",x)
bfText.setAttribute("y",y-28)
bfText.setAttribute("class","bf")
bfText.textContent="BF:"+getBF(node)

svg.appendChild(bfText)

if(node.left){

let line=document.createElementNS("http://www.w3.org/2000/svg","line")

line.setAttribute("x1",x)
line.setAttribute("y1",y+r)

line.setAttribute("x2",x-gap)
line.setAttribute("y2",y+80-r)

svg.appendChild(line)

drawTree(node.left,x-gap,y+80,gap/1.6)
}

if(node.right){

let line=document.createElementNS("http://www.w3.org/2000/svg","line")

line.setAttribute("x1",x)
line.setAttribute("y1",y+r)

line.setAttribute("x2",x+gap)
line.setAttribute("y2",y+80-r)

svg.appendChild(line)

drawTree(node.right,x+gap,y+80,gap/1.6)
}

}

function renderTree(node){

let svg=document.getElementById("tree")

svg.innerHTML=""

drawTree(node,600,60,250)

}