const chicos = [
  {
    nombre: "Juan",
    edad: 20,
  },
  {
    nombre: "Pedro",
    edad: 25,
  },
  {
    nombre: "Marcos",
    edad: 28,
  },
];
const chicas = [
  {
    nombre: "Maria",
    edad: 24,
  },
  {
    nombre: "Cristina",
    edad: 23,
  },
  {
    nombre: "Laura",
    edad: 26,
  },
];

const alumnos1 = [...chicos, ...chicas];
console.log(alumnos1);
const ordenar2 = (a, b) => a.edad - b.edad;
alumnos1.sort(ordenar2);

const pares = [2, 4, 6, 8, 10];
const impares = [1, 3, 5, 7, 9];
const numerosHasta10 = [...pares, ...impares].sort(ordenar3);
console.log(numerosHasta10);

function ordenar3(a, b) {
  return a - b;
}
