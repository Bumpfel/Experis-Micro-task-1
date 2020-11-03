const cardTemplate = document.querySelector('#card-template')
document.querySelector('#card-placeholder').appendChild(cardTemplate.content)
const card = document.querySelector('#card')
const text = card.querySelector('#card-text')

const form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault()

  const bgColour = form.querySelector('#bgColour').value
  const message = form.querySelector('#message').value
  const font = form.querySelector('#font').value
  const fontColour = form.querySelector('#fontColour').value
  const fontSize = form.querySelector('#fontSize').value
  
  card.style.fontFamily = font
  card.style.backgroundColor = bgColour
  card.style.color = fontColour
  text.innerText = message
  text.style.fontSize = fontSize + 'px'
})
