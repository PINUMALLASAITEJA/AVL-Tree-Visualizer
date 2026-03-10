const API = "https://avl-tree-visualizer-m8we.onrender.com/api";

/* Reset backend tree when page loads */
window.onload = async () => {
    try {
        await fetch(API + "/reset");
        document.getElementById("status").innerText = "Tree ready";
    } catch(err){
        console.error("Backend not reachable",err);
    }
};


/* Insert node */
async function insertNode(){

    let value = document.getElementById("value").value;

    if(value === "") return;

    try{

        const res = await fetch(API + "/insert?value=" + value);

        const data = await res.json();

        if(!data || !data.root){
            console.warn("Tree data missing");
            return;
        }

        renderTree(data.root);

        if(data.rotation !== "NONE"){
            document.getElementById("status").innerText =
                "Rotation performed: " + data.rotation;
        }else{
            document.getElementById("status").innerText =
                "Inserted " + value + " (no rotation)";
        }

    }catch(err){
        console.error("Insert failed",err);
    }

    document.getElementById("value").value="";
}


/* Clear tree */
async function clearTree(){

    try{
        await fetch(API + "/reset");
        document.getElementById("tree").innerHTML="";
        document.getElementById("status").innerText="Tree cleared";
    }catch(err){
        console.error("Reset failed",err);
    }
}


/* Render tree */
function renderTree(root){

    const svg = document.getElementById("tree");

    svg.innerHTML="";

    if(!root) return;

    drawTree(root,600,60,250);
}


/* Draw nodes recursively */
function drawTree(node,x,y,gap){

    if(!node) return;

    const svg = document.getElementById("tree");

    const r = 22;

    /* Node circle */
    const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");

    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",r);

    svg.appendChild(circle);

    /* Node value */
    const text = document.createElementNS("http://www.w3.org/2000/svg","text");

    text.setAttribute("x",x);
    text.setAttribute("y",y);

    text.textContent=node.data;

    svg.appendChild(text);

    /* Balance Factor */
    const bf = height(node.left)-height(node.right);

    const bfText = document.createElementNS("http://www.w3.org/2000/svg","text");

    bfText.setAttribute("x",x);
    bfText.setAttribute("y",y-30);
    bfText.setAttribute("class","bf");

    bfText.textContent="BF:"+bf;

    svg.appendChild(bfText);

    /* Left child */
    if(node.left){

        const line = document.createElementNS("http://www.w3.org/2000/svg","line");

        line.setAttribute("x1",x);
        line.setAttribute("y1",y+r);
        line.setAttribute("x2",x-gap);
        line.setAttribute("y2",y+80-r);

        svg.appendChild(line);

        drawTree(node.left,x-gap,y+80,gap/1.6);
    }

    /* Right child */
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


/* Height helper */
function height(node){
    if(!node) return 0;
    return node.height;
}