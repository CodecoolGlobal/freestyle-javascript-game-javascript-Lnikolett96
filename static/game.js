const classForPosition = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos6', 'pos7', 'pos8', 'pos9'];
let catPosition = 1;
let point = 0;

let startButton = document.getElementById('start')
document.getElementById('banner').style.display = "none";
startButton.addEventListener('click', function (){
        document.getElementById('banner').style.display = "";
        document.getElementById('menu').style.display = "none";
        init()
})

function init() {
    window.addEventListener("keydown", (event) => {
        if (catPosition < 1) {

            catPosition = 1;
        } else if (catPosition > 8) {

            catPosition = 8;
        }
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        console.log(event.key)
        if (event.key === "ArrowDown") {
            let moveCat = document.querySelector("#moveNyan");
            moveCat.style.animation = "Down" + catPosition;
            moveCat.style.animationFillMode = "forwards";
            moveCat.style.animationDuration = "0.5s";

            catPosition++;
            console.log(catPosition)
        }
        if (event.key === "ArrowUp") {
            let moveCat = document.querySelector("#moveNyan");
            moveCat.style.animation = "Up" + catPosition;
            moveCat.style.animationFillMode = "forwards";
            moveCat.style.animationDuration = "0.5s";
            catPosition--;
            console.log(catPosition)
        }
    })
    setInterval(makeCandies,1000);
    setInterval(takeCandy, 1000)
}

function makeCandies() {
    const candies = ['/static/asset/cake.png', '/static/asset/cookie.png', '/static/asset/cotton-candy.png', '/static/asset/ice-cream.png', '/static/asset/lollipop.png'];

    let theParent = document.querySelector('#cmove');
    let randomInt = parseInt(Math.floor(Math.random() * 9));
    let randomCandy = parseInt(Math.floor(Math.random() * 5));

    let candiesDiv = document.createElement('div');
    candiesDiv.classList.add('candy');
    candiesDiv.classList.add(classForPosition[randomInt]);
    let candiesElement = document.createElement('img');
    candiesElement.src = candies[randomCandy];
    candiesElement.style.height = '70px';

    candiesDiv.appendChild(candiesElement);
    theParent.appendChild(candiesDiv);

    setTimeout(() => {
        theParent.removeChild(candiesDiv);
    }, 7500)
}

function takeCandy() {
    // How many active Candies in the game
    let activCandies = document.getElementsByClassName('candy');
    // position of candies and nyan_character
    let nyancat = document.querySelector('#moveNyan');
    let rectnyan = nyancat.getBoundingClientRect();
    for (let i = 0; i < activCandies.length; i++) {
        let oneCandyRect = activCandies[i].getBoundingClientRect();
        console.log('rectnyan: ' + rectnyan.top + ' onecandyleft: ' + oneCandyRect.top)
        if (rectnyan.top === oneCandyRect.top && Math.floor(oneCandyRect.right) >= 1200) {
            console.log('belement')
            activCandies[i].remove()
            point += 20;
        }
}