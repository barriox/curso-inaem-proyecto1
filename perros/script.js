// Juan y Marta están haciendo un  estudio sobre perros. Cada uno le pregunta a 5 propietarios de perros
//sobre la edad de sus perros  y lo almacenan en una matriz (una cada  uno).
// De momento solo están interesados en saber si son perros adultos o cachorros. un perro se considera
//adulto si tiene al  menos 3 años, y cachorro si tiene menos de 3 años.
// Crea una función *comprobarPerros* que acepte dos arrays de edades de perros y  haga las siguientes cosas:
// 1. Juan se ha dado cuenta de que el primer y los dos últimos perros que apuntó, ¡realmente eran gatos  y
//no perros! Así que crea una copia del array y elimina las edades de los gatos (es mala  práctica mutar los datos de los  parámetros de las funciones).
// 2. Crea un único array con los datos de edades corregidos, de ambos.
// 3. Para cada uno  de los perros muestra un texto  por consola que informe si el perro es adulto o cachorro con su  edad.
// 4. Ejecuta la función para los dos conjuntos de datos siguientes.

const juan1 = [3, 5, 2, 12, 7];
const juan2 = [9, 16, 6, 8, 3];
const marta1 = [4, 1, 15, 8, 3];
const marta2 = [10, 5, 6, 1, 4];

function comprobarPerros(edades1, edades2) {
  const edades3 = edades1.splice(1, edades1.length - 2); //1
  const edadesCorregidas = [...edades3, ...edades2]; //2
  const adultez = edadesCorregidas.map((edad) => {
    //3
    if (edad >= 3) console.log(edad, "es adulto");
    else console.log(edad, "es cachorro");
  });
}
console.log("TEST 1:"); //4
comprobarPerros(juan1, marta1);
console.log("TEST 2:");
comprobarPerros(juan2, marta2);

// Dado una array  de edades de perros (test data), calcula:
// 1. La edad de los perros en años humanos, usando la siguiente fórmula:  si el perro tiene  hasta 2 años
//la edad humana será el  resultado de la expresión 2 * edadPerro.  Y si el perro tiene más de dos años,  la edad humana  será 16 + edadPerro * 4.
// 2. Excluye a los perros que tengan menos de 18 años humanos.
// 3. Calcula la edad media humana de los  perros adultos.
//*************************************************************************************************************** */
const edades1 = [5, 2, 4, 1, 15, 8, 3];
const edades2 = [16, 6, 10, 5, 6, 1, 4];

function edadesHumanas(edades) {
  const edadHumana =
    edades
      .map((edad) => (edad <= 2 ? edad * 2 : edad * 4 + 16)) //1
      .filter((edad) => edad > 18) //2
      .reduce((sum, cur) => sum + cur, 0) / edades.length; //3
  console.log(edadHumana);
}
edadesHumanas(edades1);
