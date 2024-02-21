// declare game variables
const holes = document.querySelectorAll('.hole');
const marios = document.querySelectorAll('.mario');
const score = document.querySelector('.score');


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

function randomHole(holes){
    console.log(holes.length)
}