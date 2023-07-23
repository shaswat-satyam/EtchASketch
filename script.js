const grid = document.querySelector('.grid');
const clearBtn = document.getElementById('clear');
const randomBtn = document.getElementById('random');
const grayBtn = document.getElementById('grey');
const eraserBtn = document.getElementById('eraser');


var size = 16;
var mode = 'gray';
var color = 'black';


makeGrid(size);

function setEraser(){
    color = 'white'
}

function setGrey(){
    color = 'black'
}

function setRes(){
    size = prompt("Enter the number of pixels");
    clearGrid();
}

function setRandom(){
    color = 'random'
}

function setSize(){
    size = prompt("Enter the size of grid");
    makeGrid(size);
}

function clearGrid(){
    grid.innerHTML = ''
    makeGrid(size)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeColor(e){
    if(color == 'random'){
        e.target.style.backgroundColor = getRandomColor()
    }
    else{
        e.target.style.backgroundColor = color
    }
    
}

function makeGrid(size){
    for(let i = 0; i < size; i++ ){
        var cellRow = document.createElement('div')
        cellRow.className = 'cellRow'
        for(let j = 0; j < size; j++ ){
            var cell = document.createElement('div')
            cell.className = 'cell'
            cell.addEventListener("mouseover",changeColor)
            cellRow.appendChild(cell)
        }
        grid.appendChild(cellRow)
    }

}



