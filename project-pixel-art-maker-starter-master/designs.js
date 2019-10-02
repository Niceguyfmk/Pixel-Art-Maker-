//Faiz Khan
//PixelMaker Udacity
// Select size input
var height;
var width;
let gridSize = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
gridSize.addEventListener('submit', function (event) {
    event.preventDefault();
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
    alert("Doubleclick to reset color!")
})

function makeGrid() {
    //clear grid
    canvas.innerHTML = "";
    for (var i = 0; i <= height; i++) {
        var row = canvas.insertRow(i);
        for (var j = 0; j <= width; j++) {
            var cell = row.insertCell(j);
            //to add color to cell
            cell.addEventListener("click", function(e) {
                let color = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = color;                
            })
            //double click to reset color of cell to white
            canvas.addEventListener('dblclick', function (e) {
                let color = document.getElementById('colorPicker').value;
                e.target.style.backgroundColor = 'white';
            });
        } 
    }
}
