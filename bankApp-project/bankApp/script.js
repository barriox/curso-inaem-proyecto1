'use strict';

// const e = require('express');

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// BANKIST APP
const cargasPagina = window.localStorage.getItem('cargasPagina') || 0;
window.localStorage.setItem('cargasPagina', Number(cargasPagina));

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const { movements } = account1;

const displayMovements = function (movements, sort) {
  containerMovements.innerHTML = '';
  sort = sort === undefined ? 'afterbegin' : sort;
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.innerHTML += html;
    containerMovements.insertAdjacentHTML(sort, html);
  });
};
displayMovements(account1.movements);

// sort
let count = localStorage.getItem('count') ? localStorage.getItem('count') : 0;
btnSort.addEventListener('click', () => {
  containerMovements.innerHTML = '';
  count++;
  localStorage.setItem('count', count);
  console.log(count);
  const sort = count % 2 === 0 ? 'afterbegin' : 'beforeend';
  displayMovements(account1.movements, sort);
});

// Función que inserta un campo nuevo
const createUserNames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase() // a minusculas
      .split(' ') // separar en array de palabras
      .map(palabra => palabra[0]) // recorrer el array de palabras y quedarme con array de sus primeras letras
      .join(''); // unir las letras del array en string
  });
};
createUserNames(accounts);
console.log(accounts);

const totalDeposits = [2, 4, 6].reduce((acc, curVal) => acc + curVal, 0);
console.log(totalDeposits);

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, curval) => acc + curval, 0);
  labelBalance.textContent = `${acc.balance}€`;
}
function displaySummary(acc) {
  const { movements, interestRate } = acc;
  // calcular y mostrar depositos+
  console.log(movements);
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = incomes + '€';
  // calcular y mostrar retiradas de dinero
  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = Math.abs(outcomes) + '€';
  // calcular y mostrar intereses
  // const interest = acc.interestRate > 1 ? (incomes * acc.interestRate) / 100 : incomes / 100;
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * interestRate) / 100)
    .filter(interest => interest > 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = interest + '€';
}

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  console.log(username, pin);
  const currentAccount = accounts.find(acc => acc.username === username);
  if (currentAccount?.pin === pin) {
    labelWelcome.textContent = `Bienvenido ${currentAccount.owner}`;
    displayMovements(account1.movements);
    calcDisplayBalance(account1);
    displaySummary(account1);
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // quitar foco
  } else {
    console.log('Usuario o pin incorrectos');
  }
});
