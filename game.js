let catPosition = 1;
let point = 0;

const candies = ['asset/cake.png', 'asset/cookie.png', 'asset/cotton-candy.png', 'asset/ice-cream.png', 'asset/lollipop.png'];
const baddies = ['asset/angry-cat.png', 'asset/bag.png', 'asset/doom.png', 'asset/poke.png', 'asset/poo.png', 'asset/predator.png', 'asset/blackhole.png', 'asset/water.png']


function init() {
    window.addEventListener("keydown", (event) => {
        if (catPosition < 1) {

            catPosition = 1;
        }
        else if (catPosition > 8) {

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
    setInterval(makeAssumable, 1000, baddies);setInterval(makeAssumable,2000, candies);
}

function makeAssumable(searchList) {

    const candies = ['asset/cake.png', 'asset/cookie.png', 'asset/cotton-candy.png', 'asset/ice-cream.png', 'asset/lollipop.png'];
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