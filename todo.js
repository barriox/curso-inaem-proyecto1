const myName = "Miguel";
console.log("Este es un mensaje par la consola");
console.log(myName);
console.warn("Ese usuario no existe!");
console.error("Errorcito");

//Objetos
const Student = {
  nombre: "Miguel",
  apellido: "Barrio",
};

//Constantes
const PI = "3.1423";

const friend1 = "Juan";
const friend2 = "Pepe";

//concatenando
console.log("Mis mejores amigos son", friend1, "y", friend2);
//en la misma cadena
console.log(`Mis mejores amigos son ${friend1} y ${friend2}`);

//variable
let friend3 = "Carlos";
console.log("Friend3 ahora vale", friend3);
friend3 = "Luis";
console.log("Friend3 ahora vale", friend3);

const currentYear = 2022;
const birthYear = 1998;
const age = currentYear - birthYear;
console.log("Años:", age);

//EJERCICIO1
//TEST DATA 1
let pesoPedro = 78;
let alturaPedro = 1.69;
let pesoLucas = 92;
let alturaLucas = 1.95;
let pedroIMC = pesoPedro / (alturaPedro * alturaPedro);
let lucasIMC = pesoLucas / (alturaLucas * alturaLucas);
console.log("Pedro IMC:", pedroIMC, "y Lucas IMC", lucasIMC);
let pedroMayorIMC;
if (pedroIMC > lucasIMC) {
  pedroMayorIMC = true;
} else {
  pedroMayorIMC = false;
}
console.log(pedroMayorIMC);

//TEST DATA 2 CON FUNCIONES
let nombre = "Pedro";
pesoPedro = 95;
alturaPedro = 1.88;
pedroIMC = calcularMostrarIMC(pesoPedro, alturaPedro, nombre);
pesoLucas = 85;
alturaLucas = 1.76;
nombre = "Lucas";
lucasIMC = calcularMostrarIMC(pesoLucas, alturaLucas, nombre);
mayorMostrarIMC(lucasIMC, pedroIMC);

//FUNCIONES
function calcularMostrarIMC(peso, altura, nombre) {
  const imc = peso / (altura * altura);
  console.log(nombre, "IMC:", imc);
  return imc;
}
function mayorMostrarIMC(imc1, imc2) {
  let mayor = false;
  if (imc1 > imc2) {
    mayor = true;
  }
  console.log(mayor);
}

//Operador ternario
// condicion ? console.log('Verdadero') : console.log('Falso')

const anoNac = "1998";
//con literal string
console.log(`Cumples la mayoria de edad el año ${Number(anoNac) + 18}`);

//con , lo interpreta como numero
console.log("Cumples la mayoria de edad el año", Number(anoNac) + 18);

//con + lo interpreta como string
console.log("Cumples la mayoria de edad el año " + (Number(anoNac) + 18));

console.log(typeof anoNac, typeof Number(anoNac), anoNac, Number(anoNac));

console.log(Boolean(0), 0); //false
console.log(Boolean(7), 7); //true
console.log(Boolean(-2), -2); //true
console.log(Boolean(""), "cadena vacia"); //false
console.log(Boolean("pepe"), "cadena con texto"); //true

const dinero = 0;
if (dinero) {
  //cuidado con los ifs porque hace conversiones siempre, en este caso siempre ira al else
  console.log("Vamos al cine");
} else {
  console.log("No vamos al cine");
}

//con un prompt aunque pongamos numeros los recoge como strings
const edad = Number(prompt("¿Cual es tu edad?"));
if (edad >= 18) {
  console.log("Puede beber alcohol");
} else {
  console.log("No puede beber alcohol");
}

let espana = (96 + 108 + 89) / 3;
let francia = (88 + 91 + 110) / 3;
if (espana > francia) {
  console.log("Ganador España");
} else if (espana == francia) {
  console.log("Ambos son ganadores");
} else {
  console.log("Ganador Francia");
}

espana = (97 + 112 + 101) / 3;
francia = (109 + 95 + 123) / 3;
if (espana > francia && espana >= 100) {
  console.log("Ganador Bonus España");
} else if (espana == francia) {
  console.log("Ambos son ganadores del bonus");
} else {
  if (francia >= 100) {
    console.log("Ganador Bonus Francia");
  }
}

const LUNES = 1;
const MARTES = 2;
const MIERCOLES = 3;
const JUEVES = 4;
const VIERNES = 5;
const SABADO = 6;
const DOMINGO = 0;

const d = new Date();
const dia = d.getDay();

switch (dia) {
  case LUNES:
  case JUEVES:
    console.log("Comemos verdura");
    break;
  case MARTES:
    console.log("Comemos pasta");
    break;
  case MIERCOLES:
  case VIERNES:
    console.log("Comemos legumbre");
    break;
  case SABADO:
  case DOMINGO:
    console.log("Comemos libre");
    break;
}

//ternario
const valor = 234;
const seguro = valor >= 50 && valor <= 300 ? 0.15 : 0.2;
console.log(
  `Valor producto=${valor}, porcentaje seguro=${seguro * 100}%, coste total=${
    valor * (1 + seguro)
  }, total impuestos=${valor * (1 + seguro) - valor}`
);

//FUNCIONES
function hacerZumo(naranjas, manzanas) {
  console.log("naranjas:", naranjas, "manzanas:", manzanas);
  const zumo = `Zumo con ${naranjas} naranjas y ${manzanas} manzanas`;
  return zumo;
}
const zumoManzana = hacerZumo(0, 5);
console.log(zumoManzana);

//FUNCIONES ANONIMAS
const calcularEdad = function (year) {
  return 2022 - year;
};
const años = calcularEdad(1998);
console.log(años);

//FUNCIONES FLECHA - ARROW FUNCTIONS
//                 atributos    retorno
const calculameEdad = (year) => 2022 - year;
const calcularJubilacion = (year) => {
  const añosJubilacion = 67 - (2022 - year);
  return añosJubilacion;
};
console.log(calcularJubilacion(1998));

//poco eficiente
const amigo1 = "pepe";
const amigo2 = "maria";
const amigo3 = "luis";
const amigo4 = "nuria";

//mejor meterlos en un array
const amigos = ["pepe", "maria", "luis", "nuria"];

//no concatena la variable y no la cambia
console.log("amigos:", amigos);
//concatena la variable y la convierte a string
console.log("amigos: " + amigos);
//literal string
console.log(`amigos: ${amigos}`);

//añadir al array
amigos.push("Juan");

let date = new Date();
const AÑO_ACTUAL = date.getFullYear();
const calculaEdad = (nacimiento) => AÑO_ACTUAL - nacimiento;
console.log(calculaEdad(1998));

const añosNacimiento = [1998, 1992, 1994, 1978, 1957, 2001];

let edades = [
  calcularEdad(añosNacimiento[0]),
  calcularEdad(añosNacimiento[1]),
  calcularEdad(añosNacimiento[2]),
  calcularEdad(añosNacimiento[3]),
  calcularEdad(añosNacimiento[4]),
  calcularEdad(añosNacimiento[5]),
];
console.log(edades);

//*************************** BUCLES ****************************
//BUCLE FOREACH
edades.forEach(function (edad, index) {
  console.log("En el índice " + index + " hay este valor: " + edad);
});
//BUCLE FOREACH CON ARROWFUNCTION
edades.forEach((edad) => {
  console.log(edad);
});
//BUCLE FOR
for (let i = 0; i <= edades.length - 1; i++) {
  console.log(edades[i]);
}
//BUCLE FOR...OF
for (let edad of edades) {
  console.log(edad);
}
//BUCLE FOR...IN PARA OBJETOS
const persona = { nombre: "miguel", apellido: "barrio", edad: 24 };
for (const property in persona) {
  console.log(`${property}: ${persona[property]}`);
}

//ITERANDO UN ARRAY DENTRO DE UN OBJETO Y RECORRIENDO EL OBJETO CON FOR...IN Y FOR...OF
const amigos2 = ["Marius", "Carlos", "Guillermo"];
const Miguel = {
  nombre: "Miguel",
  apellido: "Barrio",
  edad: 24,
  amigos: amigos2,
};
console.log(Miguel);
for (let property in Miguel) {
  if (property == "amigos") {
    let mensaje = "Tus amigos son: ";
    for (let amigo of amigos2) {
      mensaje += amigo + " ";
    }
    console.log(mensaje);
  }
}

//VERSIONADO SEMANTICO
// 1.0.0   -> PRIMERA VERSION DE MI APLICACION
// 1.0.1   -> FIX DE MI APLICACION
// 1.1.0   -> CAMBIO MENOR, MINOR CHANGE
// 2.0.0   -> CAMBIO MAYOR, MAJOR CHANGE

const Marius = {
  nombre: "Marius",
  apellido: "Stoica",
  edad: 25,
};
const Carlos = {
  nombre: "Carlos",
  apellido: "Castro",
  edad: 22,
};
const Guillermo = {
  nombre: "Guillermo",
  apellido: "Brotons",
  edad: 18,
};
const personitas = [Marius, Carlos, Guillermo];
const pers = prompt("De quién buscas info?");
const campo = prompt("A que campo corresponde?");
//CON FOREACH
personitas.forEach(function (contacto) {
  if (contacto.nombre == pers) console.log(contacto);
});
//CON FOR
for (let i = 0; i < personitas.length; i++) {
  const contacto = personitas[i];
  if (contacto.nombre == pers) console.log(contacto);
}
//CON FOR...OF
for (const contacto of personitas) {
  if (contacto.nombre == pers) console.log(contacto);
}

//CON BUSQUEDA DE LOS CAMPOS
//CON FOREACH
personitas.forEach(function (contacto) {
  if (contacto[campo] == pers) console.log(contacto);
});
//CON FOR
for (let i = 0; i < personitas.length; i++) {
  const contacto = personitas[i];
  if (contacto[campo] == pers) console.log(contacto);
}
//CON FOR...OF
for (const contacto of personitas) {
  if (contacto[campo] == pers) console.log(contacto);
}

//FUNCIONES ENCADENADAS

const numeros = [2, 4, 6, 8, 10, 11];
const numerosMenores8 = numeros
  .filter((numero) => numero < 8)
  .filter((item) => item % 2 === 0)
  .map((item) => item + 1);

const promesa = new Promise(function (resolve, reject) {});

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Promesa iniciada");
  setTimeout(
    () =>
      Math.random() > 0.5 ? resolve("Ganaste") : reject(new Error("Perdiste")),
    2000
  );
});
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

const wait = (segundos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Ha pasado ${segundos} segundos`);
    }, segundos * 1000);
  });
};

wait(1)
  .then((data) => {
    console.log(data);
    return wait(2);
  })
  .then((data) => {
    console.log(data);
    return wait(4);
  })
  .then((data) => {
    console.log(data);
    return wait(8);
  })
  .then((data) => console.log(data));

// pruebas

// INMUTABILIDAD -> Los metodos y las variables pueden ser inmutables o mutables

// const ordenar = function (a, b){
//  return a-b;
// };

const edades = [3, 9, 2, 10, 5, 7];

// const ordenar = (a, b) => a - b;
// const edadesOrdenadas = edades.sort(ordenar);

const edadesOrdenadas = edades.sort((a, b) => b - a);

console.log(edades);
console.log(edadesOrdenadas);

const estudiante = { nombre: "pepe", edad: 17 };
const changeEstudiante = (estudiante, nuevasPropiedades) => ({
  ...estudiante,
  ...nuevasPropiedades,
});
const estudiante2 = changeEstudiante(estudiante, { nombre: "miguel" });

console.log(estudiante2);

// En lugar de:
// const nombre=estudiante.nombre;
// const edad=estudiante.edad

// SE HACE CON:
const { nombre, edad } = estudiante;

const letras = ["a", "b", "c", "d", "e"];
console.log(letras);
console.log(letras.slice(2).slice(1));
console.log(letras.slice(2, 4));
console.log(letras.slice(-2));

// estas formas de hacer copias no modifican el original
const copyLetras1 = [...letras];
const copyLetras2 = letras.slice();
console.log("copyLetras1:", copyLetras1);
console.log("copyLetras2:", copyLetras2);

// por otro lado splice si modifica el original
const copyLetras3 = copyLetras2.splice(2);
console.log("copyLetras2:", copyLetras2);
console.log("copyLetras3:", copyLetras3);

// concatenar 2 arrays
const letras2 = ["f", "g", "h", "i", "j", "k"];
const alfabeto1 = [...letras, ...letras2];
const alfabeto2 = letras.concat(letras2);
console.log("Alfabeto1", alfabeto1);
console.log("Alfabeto2", alfabeto2);

// ultimo elemento array
console.log(alfabeto1.at(-1));

const { movements } = account1;
for (const [key, value] of movements.entries()) {
  // .entries para tener tambien el indice, el resultado seria un array [i,movement]. Para acceder a ello hacemos destructuracion [key,value]
  console.log(key, value);
}
for (let i = 0; i < movements.length; i++) {
  console.log(i, movements[i]);
}

//CON OBJETOS Object.keys(objeto), Object.values(), Object.entries(objeto)

//ARRAY MAP VS FOREACH, FOR Y FOROF; ES MAS CORTO, NO HAY QUE DECLARAR ARRAY VACIO ANTES
const dobles = [1, 2, 3].map((elemento) => elemento * 2);
console.log(dobles);

const dobles2 = [];
for (const elemento of [1, 2, 3]) dobles2.push(elemento * 2);
console.log(dobles2);

const dobles3 = [];
[1, 2, 3].forEach((elemento) => dobles3.push(elemento * 2));
console.log(dobles3);

const numeros = [1, 2, 3];
const dobles4 = [];
for (let i = 0; i < numeros.length; i++) {
  dobles4[i] = numeros[i] * 2;
}
console.log(dobles4);

const eurToUSD = 1.09;
const movementsUSD = account1.movements.map((mov) => mov * eurToUSD);
console.log(account1.movements);
console.log(movementsUSD);

const movementsUSDDoble = account1.movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .map((mov) => mov * 2)
  .map((mov) => "$ " + mov.toFixed(2));
console.log(movementsUSDDoble);

const createUserNames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase() //a minusculas
      .split(" ") //separar en array de palabras
      .map((palabra) => palabra[0]) //recorrer el array de palabras y quedarme con array de sus primeras letras
      .join(""); //unir las letras del array en string
  });
};
createUserNames(accounts);
console.log(accounts);

const depositos = account1.movements.filter((mov) => mov > 0);
console.log(account1.movements);
console.log(depositos);

const totalDeposits = [2, 4, 6].reduce((acc, curVal) => acc + curVal, 0);
console.log(totalDeposits);
