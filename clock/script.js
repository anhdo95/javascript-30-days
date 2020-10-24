const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')

function startTicking() {
  const now = new Date()
  const zeroHoursDegrees = 90

  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secondsDegrees = ((seconds / 60) * 360) + zeroHoursDegrees
  const minutesDegrees = ((minutes / 60) * 360) + (seconds / 60 * (360 / 60)) + zeroHoursDegrees
  const hoursDegrees = ((hours / 12) * 360) + (minutes / 60 * (360 / 12)) + zeroHoursDegrees

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
} 

setInterval(startTicking, 1000)