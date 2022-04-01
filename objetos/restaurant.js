"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tava e nti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log("Pasta hecha con los ingredientes", ing1, ",", ing2, ",", ing3);
  },
};

const menus = restaurant.mainMenu;
const { mainMenu: menu = [] } = restaurant;

//shallow copy - copia superficial
const { restaurant: restaurant1 } = restaurant;
const { restaurant: restaurant2 } = { ...restaurant };

//opcion1 para añadir campos:
const restaurant6 = restaurant;
restaurant6.postres = ["Flan", "Tiramisu", "Cannoli"];

//opcion2, con spread operator
const { resturant: restaurant3 } = {
  ...restaurant,
  postres: ["Flan", "Tiramisu", "Cannoli"],
};

//LO MAS NORMAL SERIA TENER LOS POSTRES DEFINIDOS PREVIAMENTE
const postres = ["Flan", "Tiramisu", "Cannoli"];
//opcion1 para añadir campos:
restaurant6.postres = postres;

//opcion2, con spread operator
const { resturant: restaurant4 } = {
  ...restaurant,
  postres,
};
const { resturant: restaurant5 } = {
  ...restaurant,
  postres: postres,
};

//DESTRUCTURING: Cogemos un valor de un objeto/array y lo guardamos ne una variable
//SPREAD OPERATOR: Quitamos {} o [] de un objeto/array
//REST OPERATOR: guardamos varios elementos en un array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, third, ...rest] = arr;
console.log("Rest operator", rest, "Spread operator", ...arr);

//HORARIO QUE TIENE ENTRE SEMANA EL RESTAURANTE

const { openingHours } = restaurant;
console.log(openingHours);
const { sat, sun, ...weekDays } = openingHours;
console.log(weekDays);

//en una linea
// const {
//   openingHours: { sat, sun, ...weeklyDays },
// } = restaurant;
// console.log(weeklyDays);

//FUNCION QUE SUME LOS VALORES QUE SE PASEN COMO ARGUMENTOS

const suma1 = (a, b) => a + b;
const suma2 = (a, b, c) => a + b + c;
console.log(`Suma de 3 y 4: ${suma1(3, 4)}`);
console.log(`Suma de 3, 4 y 5: ${suma2(3, 4, 5)}`);

//para una funcion suma que sume independientemente del numero de argumentos
const suma3 = (...arr) => {
  //ponemos los puntitos para que lo que viene me lo agrupe en un array
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    //recorremos el array
    total += arr[i];
  }
  return total;
};

console.log(`Suma de muchos numeros ${suma3(2, 4, 5, 6, 3, 5, 6, 1, 4)}`);

const numGuest = restaurant.numGuest ?? 10;
console.log("EL numero de comensales es de", numGuest);

const platosRestaurante = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(platosRestaurante);

let i = 0;
for (const plato of platosRestaurante) {
  i++;
  console.log(i + ". En este restaurante se puede comer", plato);
}

for (const entrada of platosRestaurante.entries()) {
  console.log(entrada, "typeof: ", typeof entrada);
}
for (const [key, value] of platosRestaurante.entries()) {
  console.log(key + 1, value);
}
