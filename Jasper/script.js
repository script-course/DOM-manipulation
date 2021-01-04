const NAME = 'Jasper is the best!'

const COLORS = ["red", "green", "yellow", "purple", "blue"]

const BUTTON = document.getElementById('button');

BUTTON.addEventListener('click', changeColor);

document.getElementById('name').innerHTML = NAME;

function changeColor(){
    document.getElementById('name').style.color = COLORS[Math.floor(Math.random()*5)];
}