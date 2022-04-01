"use strict";

const current1 = document.querySelector("#current--0");
const total1 = document.querySelector("#score--0");
const current2 = document.querySelector("#current--1");
const total2 = document.querySelector("#score--1");
const newgame = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
dice.classList.add("hidden");
current1.textContent = 0;
current2.textContent = 0;
total1.textContent = 0;
total2.textContent = 0;

let ended = false;
let currentPlayer = player1;
let sum = 0;
let sum2 = 0;
let hold1 = 0;
let hold2 = 0;
//ROLL DICE, CURRENT AND PLAYER SWAP
roll.addEventListener("click", function () {
  dice.classList.remove("hidden");
  const number = Math.trunc(Math.random() * 6 + 1);
  switch (number) {
    case 1:
      dice.src = "images/dice-1.png";
      break;
    case 2:
      dice.src = "images/dice-2.png";
      break;
    case 3:
      dice.src = "images/dice-3.png";
      break;
    case 4:
      dice.src = "images/dice-4.png";
      break;
    case 5:
      dice.src = "images/dice-5.png";
      break;
    case 6:
      dice.src = "images/dice-6.png";
      break;
  }
  if (number != 1) {
    if (currentPlayer == player1) {
      sum += number;
      current1.textContent = sum;
    } else {
      sum2 += number;
      current2.textContent = sum2;
    }
  } else {
    if (currentPlayer == player1) {
      currentPlayer = player2;
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
      current1.textContent = 0;
      sum = 0;
    } else {
      currentPlayer = player1;
      player2.classList.remove("player--active");
      player1.classList.add("player--active");
      current2.textContent = 0;
      sum2 = 0;
    }
  }
});

//HOLD SCORE, ADD TO TOTAL
hold.addEventListener("click", function () {
  if (currentPlayer == player1) {
    hold1 += sum;
    total1.textContent = hold1;
    sum = 0;
    current1.textContent = 0;
  } else {
    hold2 += sum2;
    total2.textContent = hold2;
    sum2 = 0;
    current1.textContent = 0;
  }
  if (hold1 >= 20) {
    total1.classList.add("player--winner");
    ended = true;
  } else if (hold2 >= 20) {
    total2.classList.add("player--winner");
    ended = true;
  }
  if (ended == true) {
    roll.disabled = true;
    hold.disabled = true;
    newgame.style.width = "300px";
    newgame.style.fontWeight = "40px";
  }
});
//NEW GAME
newgame.addEventListener("click", function () {
  window.location.reload();
});
