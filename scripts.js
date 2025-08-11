let cellcount=16;
const container = document.querySelector(".container");
const button = document.querySelector(".button");

function createCells(cellcount){
    for(let i=0; i<cellcount*cellcount; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width= `calc(100%/${cellcount})`
        cell.addEventListener("mouseover", (e)=>e.target.classList.add("changeColor"));
        container.appendChild(cell);
    }
}

function clicked(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    cellcount = parseInt(prompt("Enter N to create NXN cells (Max is 100)"));
    console.log(cellcount);
    createCells(cellcount);
}

button.addEventListener("click", clicked);

createCells(cellcount);
