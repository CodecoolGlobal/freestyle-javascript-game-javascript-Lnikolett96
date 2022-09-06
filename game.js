
const position = [0, 80, 160, 240, 320, 400, 480, 560, 640];
const candies = ['asset/cake.png', 'asset/cookie.png', 'asset/cotton-candy.png', 'asset/ice-cream.png', 'asset/lollipop.png'];
const classForCandies = ['candies', 'candies2', 'candies3', 'candies4', 'candies5', 'candies6', 'candies7', 'candies8', 'candies9'];
let theParent = document.querySelector('#cmove');


while (setTimeout(10)) {

    let randomInt = parseInt(Math.floor(Math.random() * 10));

    let candiesDiv = document.createElement('div');
    let candiesElement = document.createElement('img');

    candiesDiv.classList.add(classForCandies[randomInt]);
    candiesElement.src = candies[randomInt];
    candiesDiv.appendChild(candiesElement);
    theParent.appendChild(candiesDiv);

}


