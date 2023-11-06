window.onload = function() {
    var grid = document.getElementById('grid');
    for (var i = 0; i < 700; i++) {
        var square = document.createElement('div');
        square.addEventListener('mouseover', changeColor);
        grid.appendChild(square);
    }
}

function changeColor() {
    this.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
