'use strict'

const current1 = document.querySelector('#current--0'),
  total1 = document.querySelector('#score--0'),
  current2 = document.querySelector('#current--1'),
  total2 = document.querySelector('#score--1'),
  newgame = document.querySelector('.btn--new'),
  roll = document.querySelector('.btn--roll'),
  hold = document.querySelector('.btn--hold'),
  player1 = document.querySelector('.player--0'),
  player2 = document.querySelector('.player--1'),
  dice = document.querySelector('.dice')

let ended, currentPlayer, sum, holded

const init = function () {
  player1.classList.add('player--active')
  player2.classList.remove('player--active')
  dice.classList.add('hidden'),
    (current1.textContent = 0),
    (current2.textContent = 0),
    (total1.textContent = 0),
    (total2.textContent = 0),
    (ended = false),
    (currentPlayer = 0),
    (sum = 0),
    (holded = [0, 0])
}
init()
//ROLL DICE, CURRENT AND PLAYER SWAP
roll.addEventListener('click', function () {
  dice.classList.remove('hidden')
  const number = Math.trunc(Math.random() * 6 + 1)
  dice.src = `images/dice-${number}.png`
  if (number != 1) {
    sum += number
    currentPlayer === 0
      ? (current1.textContent = sum)
      : (current2.textContent = sum)
  } else {
    sum = 0
    switchPlayer()
  }
})
const switchPlayer = () => {
  currentPlayer = 0 === currentPlayer ? 1 : 0
  player1.classList.toggle('player--active')
  player2.classList.toggle('player--active')
  current1.textContent = 0
  current2.textContent = 0
}

//HOLD SCORE, ADD TO TOTAL
hold.addEventListener('click', function () {
  holded[currentPlayer] += sum
  sum = 0
  if (currentPlayer == 0) {
    total1.textContent = holded[currentPlayer]
    current1.textContent = 0
  } else {
    total2.textContent = holded[currentPlayer]
    current2.textContent = 0
  }
  if (holded[currentPlayer] >= 100) {
    currentPlayer == 0
      ? total1.classList.add('player--winner')
      : total2.classList.add('player--winner')
  }
})
//NEW GAME
newgame.addEventListener('click', init)
