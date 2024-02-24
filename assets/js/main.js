// declare game variables
const holes = document.querySelectorAll('.hole');
const marios = document.querySelectorAll('.mario');
const timerDisplay = document.getElementById('timer');

// Declare constants for timeout duration and countdown interval
const TIMEOUT_DURATION_MS = 20000; // 20 seconds
const COUNTDOWN_INTERVAL_MS = 1000; // 1 second

// dynamically changing variables
let displayScore = document.getElementById('marios-hit');
let sameHole;
let timeUp = false;
let score = 0;

// add event listeners DOM load before running game, means the code will be executed once fully loaded

document.addEventListener('DOMContentLoaded', function () {

    let button = document.getElementById('start');
    button.addEventListener('click', startTheGame);

    // Declare game instructions variables
    const modBox = document.getElementById('modal-box');
    const infoButton = document.getElementById('instructions');
    const closeSpan = document.getElementsByClassName('close')[0];

    // opens the instructions box when the user clicks on game instructions
    infoButton.addEventListener('click', function () {
        modBox.style.display = 'block';
    });

    // close the modal box on click of the x
    closeSpan.addEventListener('click', function () {
        modBox.style.display = 'none';
    });

    // close the modal box if a user clicks anywhere outside the box
    window.addEventListener('click', function (event) {
        if (event.target === modBox) {
            modBox.style.display = 'none';
        }
    });
});


/**
 * iterate through the array of marios,
 * add click event to increase the score
 */
// Add event listeners to each Mario for click events
marios.forEach(mario => {
    mario.addEventListener('click', () => {
        score++; // Increase the score by 1
        displayScore.textContent = score; // Update the score display
    });
});

/**
 * function that will give a random amount of time between pop ups
 */
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * function to get the mario to pop up randomly
 * for a random amount of time and go back down the pipe
 */
function randomHole(holes) {
    // get a random x from our holes 0-8 (we have 9)
    const x = Math.floor(Math.random() * holes.length);
    const hole = holes[x];
    // To stop the mario being popped up in the same hole twice in a row. This will run the function above again and again until it gets a different hole.
    if (hole === sameHole) {
        return randomHole(holes);
    }

    // this will save which hole got chosen the last time around
    sameHole = hole;
    return hole;
}

/**
 * This function will get the mario to pop up in a random hole, at a random amount of time
 */
function pop() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    if (!timeUp) {
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp)
                pop();
        }, time);
    }
}

/**
 * function which starts the game, sets score to zero and inputs the time remaining
 */
function startTheGame() {
    // Disable the start button
    document.getElementById('start').disabled = true;
    document.getElementById('time-left').style.display = 'block';
    // hide timeup message when start game is played again
    document.getElementById('time-up').style.display = 'none';
    displayScore.textContent = 0;
    score = 0;
    timeUp = false;
    timeLeft(TIMEOUT_DURATION_MS / 1000); // Convert milliseconds to seconds
    pop();
    setTimeout(function () {
        // Enable the start button
        document.getElementById('start').disabled = false;
        // set timeup to true after game duration
        timeUp = true;
        // call the function to display the game over pop up
        displayGameOverPopup();
    }, 20000); // Changed to milliseconds (20 seconds)
}

/**
 * function to count down the time by 1 second
 */
function timeLeft(seconds) {
    let countDown = setInterval(function () {
        timerDisplay.innerHTML = seconds;
        seconds--;
        if (seconds === 0) {
            clearInterval(countDown);
            document.getElementById('time-up').style.display = 'block';
            document.getElementById('time-left').style.display = 'none';
            document.getElementById('startButtonText').innerHTML = 'Play Again';

        }
    }, COUNTDOWN_INTERVAL_MS);
}

/**
 * function to display a game over function with the users score and button to play again
 */
// ref help with Web Developer course on Udemy
function displayGameOverPopup () {
    // create the popup element
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // create a message to display game over and the final score and a button to play again
    const message = document.createElement('p');
    message.textContent = `Game Over! Your Score is ${score}`;
    popup.appendChild(message);

    // create a button to play again
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', function () {
        // restart the game when clicked
        popup.style.display = 'none';
        startTheGame();
    });
    popup.appendChild(playAgainButton);
    // append the popup to doc body
    document.body.appendChild(popup);
}