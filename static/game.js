let catPosition = 4;
let point = 0;

const candies = ['/static/asset/cake.png', '/static/asset/cookie.png', '/static/asset/cotton-candy.png', '/static/asset/ice-cream.png', '/static/asset/lollipop.png'];
const baddies = ['/static/asset/angry-cat.png', '/static/asset/bag.png', '/static/asset/doom.png', '/static/asset/poke.png', '/static/asset/poo.png', '/static/asset/predator.png', '/static/asset/blackhole.png', '/static/asset/water.png']


function init() {
    window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        console.log(event.key)
        if (event.key === "ArrowDown") {
            let moveCat = document.querySelector("#moveNyan");
            if (catPosition >= 8) {
            catPosition = 8;
            }else{
                catPosition++;
            }
            moveCat.style.animation = "Down" + (catPosition);
            moveCat.style.animationFillMode = "forwards";
            moveCat.style.animationDuration = "0.5s";
            console.log(catPosition)
            console.log(moveCat.style.animation)
        }
        if (event.key === "ArrowUp") {
            let moveCat = document.querySelector("#moveNyan");
            if (catPosition <= 1) {
            catPosition = 1;
            }else{
                catPosition--;
            }
            moveCat.style.animation = "Up" + (catPosition);
            moveCat.style.animationFillMode = "forwards";
            moveCat.style.animationDuration = "0.5s";
            console.log(catPosition)
            console.log(moveCat.style.animation)
        }
    })
    setInterval(makeAssumable, 500, baddies);setInterval(makeAssumable,2000, candies);
}

function makeAssumable(searchList) {
    const classForCandies = ['candies', 'candies2', 'candies3', 'candies4', 'candies5', 'candies6', 'candies7', 'candies8', 'candies9'];

    let theParent = document.querySelector('#cmove');
    let randomInt = parseInt(Math.floor(Math.random() * 9));
    let randomCandy = parseInt(Math.floor(Math.random() * searchList.length));

    let candiesDiv = document.createElement('div');
    candiesDiv.classList.add(classForCandies[randomInt]);
    let candiesElement = document.createElement('img');
    candiesElement.src = searchList[randomCandy];
    candiesElement.style.height = '70px';

    candiesDiv.appendChild(candiesElement);
    theParent.appendChild(candiesDiv);

    setTimeout(() => {
        theParent.removeChild(candiesDiv);
    }, 3000)
}


function takeCandy () {

    
}
init()