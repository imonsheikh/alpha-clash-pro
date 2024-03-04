// hide element by id 
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show class function 
function showElementById(elementId) { 
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

// set bg color function 
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
     element.classList.add('bg-orange-400');

}

// remove bg color function 
function removeBackgroundColorById(elementId) {
const element = document.getElementById(elementId);
element.classList.remove('bg-orange-400');


}

// score and life alternative function get text 
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);

    return value;

}

// score and life alternative function set score 
function setTextElementValueById(elementId, value) {
const element = document.getElementById(elementId);
element.innerText = value;
}

// get element Text by id 
function getElementTextById(elementId) {
const element = document.getElementById(elementId);
  const text = element.innerText
  return text; 
}


// get random alphabet function 
function getARandomAlphabet() {
    const alphabetString = 'abcdefghjklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index]

    return alphabet


    
}

// function getARandomAlphabet() {
//     // get or create an alphabet array 
//     const alphabetString = 'abcdefghjklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0-25;
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber)


//     const alphabet = alphabets[index]
//     // console.log(index, alphabet);

//     return alphabet


// }
