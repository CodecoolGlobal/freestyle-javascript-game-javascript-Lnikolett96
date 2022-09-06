let catPosition = 1;
function init() {
    window.addEventListener("keydown", (event) => {
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
    setInterval(makeCandies,2000);
}

function makeCandies() {

    const candies = ['asset/cake.png', 'asset/cookie.png', 'asset/cotton-candy.png', 'asset/ice-cream.png', 'asset/lollipop.png'];
    const classForCandies = ['candies', 'candies2', 'candies3', 'candies4', 'candies5', 'candies6', 'candies7', 'candies8', 'candies9'];
    let theParent = document.querySelector('#cmove');
    let randomInt = parseInt(Math.floor(Math.random() * 9));
    let randomCandy = parseInt(Math.floor(Math.random() * 5));

    let candiesDiv = document.createElement('div');
    candiesDiv.classList.add(classForCandies[randomInt]);
    let candiesElement = document.createElement('img');
    candiesElement.src = candies[randomCandy];
    candiesElement.style.height = '70px';

    candiesDiv.appendChild(candiesElement);
    theParent.appendChild(candiesDiv);

    setTimeout(() => {
        theParent.removeChild(candiesDiv);
    }, 7500)
}

function takeCandy () {
    
}
init()