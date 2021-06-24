// select the elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');

// function to tick the seconds hand of the clock
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  // 360 degrees of rotation in a circle
  // we need to add 90 to the result because we originally rotated the div by 90 degrees to make it top to bottom instead of left to right
  const secondsDegrees = ((seconds / 60) * 360 + 90);
  // this makes the seconds hand rotate according to the current time
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutesDegrees = ((minutes / 60) * 360 + 90);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
};


// sets the interval that setDate will run, 1000ms = 1s
setInterval(setDate, 1000);
