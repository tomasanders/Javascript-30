// add event listener for key press
// record which key was pressed
// call a function to play the appropriate audio
// change the class of the div to reflect the keypress
// remove the keypress after the transition phase ends

// listen for the keydown event, then play the audio associated with it, add the 'button-pressed' class
window.addEventListener('keydown', function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.button[data-key="${event.keyCode}"`);
  if(!audio) return; // if no audio for that key, will stop the function
  audio.currentTime = 0; // this will rewind the audio so it can play faster
  audio.play();
  key.classList.add('button-pressed');
});

// remove the 'button-pressed' class after the transform ends
function removeTransition(event) {
  if(event.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('button-pressed');
};

// listen for the transitionend action to trigger the function to remove the 'button-pressed class'
const keys = document.querySelectorAll('.button');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
