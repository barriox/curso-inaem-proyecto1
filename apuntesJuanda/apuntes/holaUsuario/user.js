// console.log("Cargando módulo para el usuario");

// const { username } = require("os").userInfo();
// const edad = 25;
// module.exports = { username, edad };


//require("./module1");
// El texto Ejecutando módulo 1 se muestra solo una vez
// Ya está cargado previamente, se usa la caché y no se ejecuta
// El texto Inicializando app sale después del console.log de los require (los require son síncronos).
require("./module2");
console.log("Iniciando app");
