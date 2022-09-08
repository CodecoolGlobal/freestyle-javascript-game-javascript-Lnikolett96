let catPosition = 4;
const classForPosition = ['pos2', 'pos3', 'pos4', 'pos5', 'pos6', 'pos7', 'pos8', 'pos9'];
let point = 0;
let life = 3;
let goodbad = ['candy', 'baddie', 'add-life']
let catMoveFixer = [catPosition]
const candies = ['/static/asset/cake.png', '/static/asset/cookie.png', '/static/asset/cotton-candy.png', '/static/asset/ice-cream.png', '/static/asset/lollipop.png'];
const baddies = ['/static/asset/angry-cat.png', '/static/asset/bag.png', '/static/asset/doom.png', '/static/asset/poke.png', '/static/asset/poo.png', '/static/asset/predator.png', '/static/asset/blackhole.png', '/static/asset/water.png']
const lifeAdding = ['/static/asset/add-life.png']
let game = init()
let startButton = document.getElementById('start')
let gameOverHtml = document.getElementById('gameover')
let userNameForm = document.getElementById('user-name')
userNameForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let userName = userNameForm.elements['player_name']
    console.log(userName.value)
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            player_name: userName.value
        })
    })
})

document.getElementById('banner').style.display = "none";
gameOverHtml.style.display = "none";

startButton.addEventListener('click', function (){
        document.getElementById('banner').style.display = "";
        document.getElementById('menu').style.display = "none";
        game
})

function init() {
    window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        console.log(event.key)
        if (event.key === "ArrowDown") {
            let moveCat = document.querySelector("#moveNyan");
            if (catMoveFixer[catMoveFixer.length - 1] - catMoveFixer[catMoveFixer.length - 2] < 0){
                catPosition += 1;
            }
            moveCat.style.animation = "Down" + catPosition;
            moveCat.style.animationFillMode = "forwards";
            moveCat.style.animationDuration = "0.5s";
            if (catPosition >= 8) {
            catPosition = 8;
            }else{
                catPosition++;
            }
            catMoveFixer.push(catPosition)
        }
        if (event.key === "ArrowUp") {
            let moveCat = document.querySelector("#moveNyan");
            if (catMoveFixer[catMoveFixer.length - 1] - catMoveFixer[catMoveFixer.length - 2] > 0){
                catPosition -= 1;
            }
            moveCat.style.animation = "Up" + catPosition;
            moveCat.style.animationFillMode = "forwards";
            moveCat.style.animationDuration = "0.5s";
            if (catPosition <= 2) {
            catPosition = 2;
            }else{
                catPosition--;
            }
            catMoveFixer.push(catPosition)
        }
    })
    setInterval(makeAssumable, 1000, baddies, classForPosition, goodbad[1]);
    setInterval(makeAssumable,1500, candies, classForPosition, goodbad[0]);
    setInterval(makeAssumable, 10000, lifeAdding, classForPosition, goodbad[2])
    setInterval(takeBaddies,200)
    setInterval(takeCandy, 200)
    setInterval(gameOver, 200)
    setInterval(() => {
        point += 5
    },5000)
}

function makeAssumable(searchList, position, identity) {
    let theParent = document.querySelector('#cmove');
    let randomInt = parseInt(Math.floor(Math.random() * 8));
    let randomCandy = parseInt(Math.floor(Math.random() * searchList.length));

    let candiesDiv = document.createElement('div');
    candiesDiv.classList.add(identity)
    candiesDiv.classList.add(position[randomInt]);
    let candiesElement = document.createElement('img');
    candiesElement.src = searchList[randomCandy];
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

function  takeBaddies() {
    let activBaddies = document.getElementsByClassName('baddie');
    let nyancat = document.querySelector('#moveNyan');
    let rectnyan = nyancat.getBoundingClientRect();
    for (let i = 0; i < activBaddies.length; i++) {
        let oneBaddieRect = activBaddies[i].getBoundingClientRect();
        if (rectnyan.x < oneBaddieRect.x + oneBaddieRect.width &&
            rectnyan.x + rectnyan.width > oneBaddieRect.x &&
            rectnyan.y < oneBaddieRect.y + oneBaddieRect.height &&
            rectnyan.y + rectnyan.height > oneBaddieRect.y) {
            console.log('belement')
            activBaddies[i].remove()
            life -= 1;
        }
    }
}

function gameOver(name, score) {
    if (life === 0) {
    }
}

        fetch(`/api/highscore?name=${name}&score=${score}`)
