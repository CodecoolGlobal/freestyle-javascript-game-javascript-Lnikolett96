let canvas = document.querySelector('#canvas1');
let canvasDrawingSurface = canvas.getContext('2d');

window.addEventListener('resize',resizeCanvas, false);
function resizeCanvas () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}




initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}
