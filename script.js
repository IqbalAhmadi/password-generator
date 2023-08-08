// variable
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Functions to get Random letter, numbers, & symbols
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // this generates a random lower letters
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65) // this generates a random upper letters
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48) // this generates a random number
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)] // this generates a random symbol
}
