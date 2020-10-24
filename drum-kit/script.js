const keys = document.querySelector('.keys')

window.addEventListener('keydown', playSound)
document.querySelector('.keys').addEventListener('transitionend', removeTransition)

function removeTransition(e) {
  if (e.propertyName !== 'transform') return

  e.target.classList.remove('playing')
}

function addTransition(element) {
  element.classList.add('playing')
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
  if (!audio) return

  audio.currentTime = 0
  audio.play()

  addTransition(key)
}