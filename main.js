// JavaScript 30 by Wes Bos
// https://www.youtube.com/watch?v=VuN8qwZoego

/*
Creating a playAudio() function
Because i want to add multiple event listeners (click, keydown) without repeating the code
that rests and plays audio
*/
function playAudio (audio) {
  // if no <audio>, stop the function from running
  if (!audio) return

  // reset the audio so that it plays from start (instead of waiting to finish previous play) on repeated keydowns
  audio.currentTime = 0

  // play the <audio> element
  audio.play()
}

/*
KEYBOARD
- Determines which keyboard key was pressed using event listener
- Gets the corresponding <audio> element which has a `data-key` using the same key as value
- Plays that audio and adds CSS class for visual effects
*/
window.addEventListener('keydown', function (e) {
  // when a key is pressed, get the corresponding <aduio> element
  const audio = document.querySelector(`audio[data-key="${e.key}"]`) // using `key` (e.g. `a`) because `keyCode` (e.g. 65) is deprecated
  const key = document.querySelector(`div[data-key="${e.key}"`)

  playAudio(audio)

  if (key) { // to avoid null error for the keys that can be pressed but we aren't using
    key.classList.add('playing') // add the effects to highlight which key was played
  }
})

/*
MOUSE
- Gets all <div>s with `.key`
- Uses a `forEach` loop to add a `click` event listener to all the divs
- Gets the corresponding <audio> element which has a `data-key` using the same key as value
- Plays audio and adds CSS class for visual effects
- Remove the CSS class when the transition effect has ended (this also caters to removig the class when the keyboard was used for playing a sound)
*/
let keys = document.querySelectorAll(`.key`) // returns a nodeList

keys.forEach(function (key) {
  key.addEventListener('click', function (e) {
    // when a <div> is clicked, get the corresponding <audio> element
    // (using the `data-key` attribute)
    const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`)

    playAudio(audio)

    key.classList.add('playing') // add the effects to highlight which key was played
  })

  key.addEventListener('transitionend', function (e) {
    key.classList.remove('playing') // remove the effects after the sound/transition has ended
  })
})
