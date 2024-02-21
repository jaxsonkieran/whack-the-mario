// declare game variables
const holes = document.querySelectorAll('.hole');
const marios = document.querySelectorAll('.mario');
const scoreBoard = document.querySelector('.score');

// dynamically changing variables
let sameHole;
let timeUp = false;

let button = document.getElementById('start');
button.addEventListener('click', function () {
    startTheGame();
})

/**
 * function that will give a random amount of time between pop ups
 */

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * function to get the mario to pop up randomly
 * for a random amount of time and go back down the pipe
 */

// reference function from Javascript 30/30
function randomHole(holes){
    // get a random x from our holes 0-8 (we have 9)
    const x = Math.floor(Math.random() * holes.length);
    const hole = holes[x];
    // console.log(hole);
    // To stop the mario being popped up in the same hole twice in a row. This will run the function above again and again until it gets a different hole.
    if (hole === sameHole){
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
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)
    // testing
    // console.log(time, hole);
    // trigger the css, animating the mario back in 
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) pop();
      }, time);
    }

    /**
     * function which starts the game, sets score to zero and inputs the time remaining
     */
    function startTheGame () {
        score.textContent = 0;
        timeUp = false;
        timeLeft(30);
        pop();
        setTimeout(function () {
            timeUp = true;
        }, 300000)
    }

// ref Ania Kubow (gave me inspiration for the timer)
/**
 * function to count down the time by 1 second
 */
    function timeLeft(seconds){
        let countDown = setInterval(function () {
            document.getElementById('timer').innerHTML = seconds;
            seconds--;
            if (seconds === -1){
                clearInterval(countDown);

            }
        }, 1000);
    }


   