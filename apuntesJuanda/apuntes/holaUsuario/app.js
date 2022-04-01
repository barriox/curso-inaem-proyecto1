// console.log("Iniciando app");
// const fs = require("fs");
// try {
//   fs.appendFileSync("saludo.txt", "Hola usuario");
//   console.log("Todo ok!");
// } catch (err) {
//   console.log("Ha habido un error");
// }

// const fs = require("fs");
// const os = require("os");
// const user = os.userInfo();

// console.log("Iniciando app");
// const saludo = "Hola " + user.username;
// fs.appendFile("saludo.txt", saludo, function (err) {
//   err ? console.log("Ha habido un error") : console.log("Todo ok");
// });

// const fs = require("fs");
// const os = require("os");
// const { username } = os.userInfo();

// console.log("Iniciando app");
// const saludo = `Hola ${username}`;
// fs.appendFile("saludo.txt", saludo, (err) => {
//   err ? console.log("Ha habido un error") : console.log("Todo ok");
// });

// const user = require("./user.js");
// console.log(module);

// const fs = require("fs");
// console.log("Iniciando app");

// const { username, edad } = require("./user");

// const saludo = `Hola ${username}, tienes ${edad} años`;
// fs.appendFile("saludo.txt", saludo, (err) => {
//   err ? console.log("Ha habido un error") : console.log("Todo ok");
// });

const fs = require("fs");
let numero1 = fs.readFileSync("./fichero1.txt", "utf8");
numero1 = numero1.split(" ");
const numero2 = fs.readFileSync("./fichero2.txt", "utf8");
console.log(numero1);
for (let i = 0; i < numero1.length; i++) {
  console.log(numero1[i]);
}
console.log(
  `El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`
);
