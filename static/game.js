let catPosition = 4;
const classForPosition = ['pos2', 'pos3', 'pos4', 'pos5', 'pos6', 'pos7', 'pos8', 'pos9'];
let point = 0;
let life = 3;
let lifeInterval = -1
let gameOverInterval = -1
let playerName = ""
let goodbad = ['candy', 'baddie', 'add-life']
let catMoveFixer = [catPosition]
const candies = ['/static/asset/cake.png', '/static/asset/cookie.png', '/static/asset/cotton-candy.png', '/static/asset/ice-cream.png', '/static/asset/lollipop.png'];
const baddies = ['/static/asset/angry-cat.png', '/static/asset/bag.png', '/static/asset/doom.png', '/static/asset/poke.png', '/static/asset/poo.png', '/static/asset/predator.png', '/static/asset/blackhole.png', '/static/asset/water.png']
const lifeAdding = ['/static/asset/add-life.png']
let mySound = new Audio('/static/music.mp3')
let startButton = document.getElementById('start')
let gameOverHtml = document.getElementById('gameover')
let userNameForm = document.getElementById('user-name')

document.getElementById('score').style.display = 'none';
document.getElementById('banner').style.display = "none";
gameOverHtml.style.display = "none";

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


startButton.addEventListener('click', function (){
        let playerNameinput = document.querySelector('#player_name')
        let newName = playerNameinput.value.trim();
        if (newName === ""){
            return;
        }
        playerName = newName;
        document.getElementById('banner').style.display = "";
        document.getElementById('score').style.display = "";
        document.getElementById('menu').style.display = "none";
        init()
})

function init() {
    mySound.play()
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
    setInterval(makeAssumable, 300, baddies, classForPosition, goodbad[1]);
    setInterval(makeAssumable,1500, candies, classForPosition, goodbad[0]);
    setInterval(makeAssumable, 10000, lifeAdding, classForPosition, goodbad[2])
    setInterval(takeBaddies,200)
    setInterval(takeCandy, 200)
    setInterval(takeLife, 200)
    gameOverInterval = setInterval(gameOver, 200)
    lifeInterval = setInterval(() => {
        point += 5
        updateScoreDisplay(point)
    },5000)
    setInterval(lifeDisplay, 60)
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
            rectnyan.y + rectnyan.height > oneCandyRect.y + 30) {
            console.log('belement')
            activCandies[i].remove()
            point += 20;
            updateScoreDisplay(point)
        }
    }
}

function updateScoreDisplay(point){
    document.querySelector("#score>h3").innerHTML = "Your score: " + point
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
            rectnyan.y + rectnyan.height > oneBaddieRect.y + 30) {
            console.log('belement')
            activBaddies[i].remove()
            life -= 1;
        }
    }
}

function lifeDisplay(){
    let lifecount = document.querySelector('#life')
    lifecount.innerHTML = life + 'X'
}


function takeLife() {
    let activBaddies = document.getElementsByClassName('add-life');
    let nyancat = document.querySelector('#moveNyan');
    let rectnyan = nyancat.getBoundingClientRect();
    for (let i = 0; i < activBaddies.length; i++) {
        let oneBaddieRect = activBaddies[i].getBoundingClientRect();
        if (rectnyan.x < oneBaddieRect.x + oneBaddieRect.width &&
            rectnyan.x + rectnyan.width > oneBaddieRect.x &&
            rectnyan.y < oneBaddieRect.y + oneBaddieRect.height &&
            rectnyan.y + rectnyan.height > oneBaddieRect.y) {
            activBaddies[i].remove()
            if (life === 3){

            }else{
                life += 1;
            }

        }
    }
}

function gameOver() {
    if (life === 0) {
        let gameOver = true;
        document.getElementById('banner').style.display = "none"
        gameOverHtml.style.display = "";
        let playerData = document.querySelector("#playerData");
        playerData.innerHTML = playerName + " : " + point;
        document.getElementById('score').style.display = "none";
        clearInterval(lifeInterval)
        clearInterval(gameOverInterval)
        sendScoreToDb(playerName, point)
        let nyancat = document.querySelector('#moveNyan');
        nyancat.remove();
        let gameOverDiv = document.querySelector('#gameover')
        gameOverDiv.classList.remove('hidden2')
        let playerData = document.querySelector("#playerName");
        playerData.innerHTML = playerName;
        let playeyHighscore = document.querySelector('#score');
        playeyHighscore.innerHTML = point;
    }
}

        //fetch(`/')

function sendScoreToDb(name, score){
    let data = new FormData();
  data.append("name", name);
  data.append("score", score);

  // INIT FETCH POST
  fetch('/api/updatescores', {
    method: "POST",
    body: data
  })
}
