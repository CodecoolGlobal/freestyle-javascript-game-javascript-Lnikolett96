
const position = [0, 80, 160, 240, 320, 400, 480, 560, 640];
const candies = ['asset/cake.png', 'asset/cookie.png', 'asset/cotton-candy.png', 'asset/ice-cream.png', 'asset/lollipop.png'];
const classForCandies = ['candies', 'candies2', 'candies3', 'candies4', 'candies5', 'candies6', 'candies7', 'candies8', 'candies9'];
let theParent = document.querySelector('#cmove');

function makeCandies() {
    let randomInt = parseInt(Math.floor(Math.random() * 10));
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
    }, 5500)
}
setInterval(makeCandies,2000);








