console.log("Iniciando app");
const fs = require("fs");
try {
  fs.appendFileSync("saludo.txt", "Hola usuario tienes 24 años");
  console.log("Todo ok!");
} catch (err) {
  console.log("Ha habido un error", err.message);
}

const os = require("os");
const user = os.userInfo();
console.log(user);
