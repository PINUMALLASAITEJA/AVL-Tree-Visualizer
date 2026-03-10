const API = "http://localhost:8080/api";

async function insertNode(){

    let value = document.getElementById("value").value;

    if(value === "") return;

    const res = await fetch(API + "/insert?value=" + value);
    const tree = await res.json();

    renderTree(tree);

    document.getElementById("value").value="";
}

async function clearTree(){

    await fetch(API + "/reset");

    document.getElementById("tree").innerHTML="";
}

function renderTree(root){

    const svg = document.getElementById("tree");
    svg.innerHTML="";

    if(!root) return;

    drawTree(root,600,60,250);
}

function drawTree(node,x,y,gap){

    if(!node) return;

    const svg = document.getElementById("tree");
    const r = 22;

    // draw node
    const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",r);

    svg.appendChild(circle);

    // node value
    const text = document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttribute("x",x);
    text.setAttribute("y",y);
    text.textContent=node.data;

    svg.appendChild(text);

    // BF display
    const bf = height(node.left)-height(node.right);

    const bfText = document.createElementNS("http://www.w3.org/2000/svg","text");
    bfText.setAttribute("x",x);
    bfText.setAttribute("y",y-30);
    bfText.setAttribute("class","bf");
    bfText.textContent="BF:"+bf;

    svg.appendChild(bfText);

    // left child
    if(node.left){

        const line = document.createElementNS("http://www.w3.org/2000/svg","line");

        line.setAttribute("x1",x);
        line.setAttribute("y1",y+r);
        line.setAttribute("x2",x-gap);
        line.setAttribute("y2",y+80-r);

        svg.appendChild(line);

        drawTree(node.left,x-gap,y+80,gap/1.6);
    }

    // right child
    if(node.right){

        const line = document.createElementNS("http://www.w3.org/2000/svg","line");

        line.setAttribute("x1",x);
        line.setAttribute("y1",y+r);
        line.setAttribute("x2",x+gap);
        line.setAttribute("y2",y+80-r);

        svg.appendChild(line);

        drawTree(node.right,x+gap,y+80,gap/1.6);
    }
}

function height(node){
    if(!node) return 0;
    return node.height;
}