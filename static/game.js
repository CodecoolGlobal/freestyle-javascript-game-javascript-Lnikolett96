const classForPosition = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos6', 'pos7', 'pos8', 'pos9'];
let catPosition = 4;
let point = 0;

let startButton = document.getElementById('start')
document.getElementById('banner').style.display = "none";
startButton.addEventListener('click', function (){
        document.getElementById('banner').style.display = "";
        document.getElementById('menu').style.display = "none";
        init()
})
const candies = ['/static/asset/cake.png', '/static/asset/cookie.png', '/static/asset/cotton-candy.png', '/static/asset/ice-cream.png', '/static/asset/lollipop.png'];
const baddies = ['/static/asset/angry-cat.png', '/static/asset/bag.png', '/static/asset/doom.png', '/static/asset/poke.png', '/static/asset/poo.png', '/static/asset/predator.png', '/static/asset/blackhole.png', '/static/asset/water.png']


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
    setInterval(makeAssumable, 500, baddies);setInterval(makeAssumable,2000, candies);setInterval(takeCandy, 1000)
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
    }, 3000)
}

function takeCandy() {
    // How many active Candies in the game
    let activCandies = document.getElementsByClassName('candy');
    // position of candies and nyan_character
    let nyancat = document.querySelector('#moveNyan');
    let rectnyan = nyancat.getBoundingClientRect();
    for (let i = 0; i < activCandies.length; i++) {
        let oneCandyRect = activCandies[i].getBoundingClientRect();
        if (rectnyan.x < oneCandyRect.x + oneCandyRect.width &&
            rectnyan.x + rectnyan.width > oneCandyRect.x &&
            rectnyan.y < oneCandyRect.y + oneCandyRect.height &&
            rectnyan.y + rectnyan.height > oneCandyRect.y) {
            console.log('belement')
            activCandies[i].remove()
            point += 20;

        }


    }
}


//if (rectnyan.top === oneCandyRect.top && oneCandyRect.right === 1038)