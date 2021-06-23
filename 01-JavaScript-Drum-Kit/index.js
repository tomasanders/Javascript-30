// add event listener for key press
// record which key was pressed
// call a function to play the appropriate audio
// change the class of the div to reflect the keypress
// remove the keypress after the transition phase ends

window.addEventListener('keydown', function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.button[data-key="${event.keyCode}"`);
  if(!audio) return; // if no audio for that key, will stop the function
  audio.currentTime = 0; // this will rewind the audio so it can play faster
  audio.play();
});
