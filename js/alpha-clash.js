// function play() {
// // step-01: hide the home screen  to hide the screen add the class hidden to the home section 
// const homeSection = document.getElementById('home-screen')
// // console.log(homeSection.classList);
// homeSection.classList.add('hidden');

// // step-02 show the play ground 
// const playGroundSection = document.getElementById('play-ground');
// // console.log(playGroundSection.classList);
// playGroundSection.classList.remove('hidden');

    
// }

function handleKeyboardKeyUpEvent (event) {
// const playerPressed = event.key;
// console.log('player pressed', playerPressed);

// // get the expected to press 
// const currentAlphabetElement = document.getElementById('current-alphabet')
// const currentAlphabet = currentAlphabetElement.innerText;
// const expectedAlphabet = currentAlphabet.toLowerCase();

// console.log(playerPressed, expectedAlphabet);


// // check matched or not 
// if(playerPressed === expectedAlphabet){
//     console.log('you get a point');

// }
// else{
//     console.log('you missed you lost a life');

// Recap this funcion code
const playerPressed = event.key;

console.log('player pressed', playerPressed);

// stop game if pressed 'Esc';
if(playerPressed === 'Escape'){
    gameOver();
}



// expected key to press 
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();

// check right or wrong key pressed 
if(playerPressed === expectedAlphabet){
    console.log('you got a point');
    console.log('you have pressed correctly1', expectedAlphabet);



    //    method01 
    // update score 
    // 1.get the current score 
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // // 2. 2. increase the score by 1
    // const newScore = currentScore + 1;

    // // 3. show the updated score
    // currentScoreElement.innerText = newScore;

    //  method 02    
    // alternative by use utility function 
    const currentScore = getTextElementValueById('current-score')
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    
    // start a new round 
    removeBackgroundColorById(expectedAlphabet)
    continueGame();

}
else{
    console.log('you press the wrong');

    // method01 
    //1. get the current life number
    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);

    // // 2.reduce the life count
    // const newLife = currentLife - 1;

    // // 3.display the updated life count 
    // currentLifeElement.innerText = newLife;

    // Method 02 
    // alternative by use utility function 
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if(updatedLife === 0){
      gameOver();
    }

}
}



// console.log(currentAlphabetElement);

// capture keyboard keypress 
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
// step-01 Generate a random alphabet
const alphabet = getARandomAlphabet();
// console.log('your random alphabet', alphabet);

// set randomly genetated alphabet to the screen (show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

// set background Color 
setBackgroundColorById(alphabet)


}  

// alternative use function call 
function play() {
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame();
}


function gameOver() {
   hideElementById('play-ground');
   showElementById('final-score');

//    update final score 
    //1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  //clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
   removeBackgroundColorById(currentAlphabet);

}


