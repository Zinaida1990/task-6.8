const trafficLight1El = document.querySelector('#trafficLight1');
const trafficLight2El = document.querySelector('#trafficLight2');
const trafficLight3El = document.querySelector('#trafficLight3');

let currentColorIndex = 0;
const colors = ['green', 'yellow', 'red'];

function getNextColor() {
    const currentColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    return currentColor;
}

function handleClick() {
    const currentColor = getNextColor();
    if (currentColor === 'green') {
        trafficLight1El.style.background = 'green';
        trafficLight2El.style.background = 'black';
        trafficLight3El.style.background = 'black';
    } else if (currentColor === 'yellow') {
        trafficLight1El.style.background = 'black';
        trafficLight2El.style.background = 'yellow';
        trafficLight3El.style.background = 'black';
    } else {
        trafficLight1El.style.background = 'black';
        trafficLight2El.style.background = 'black';
        trafficLight3El.style.background = 'red';
    }
}

trafficLight1El.addEventListener('click', handleClick);
trafficLight2El.addEventListener('click', handleClick);
trafficLight3El.addEventListener('click', handleClick);